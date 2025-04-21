import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    
    // Set canvas size to match window with pixel ratio adjustment
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Set actual size in memory (scaled to account for extra pixel density)
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      
      // Style size (CSS pixels)
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Scale context to handle pixel ratio
      ctx.scale(pixelRatio, pixelRatio);
    };
    
    // Throttle resize event to improve performance
    let resizeTimeout: number | null = null;
    const throttledResize = () => {
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resizeCanvas, 200);
    };
    
    window.addEventListener('resize', throttledResize);
    resizeCanvas();
    
    // Determine number of particles based on screen size
    const getParticleCount = () => {
      if (window.innerWidth < 480) return 15;
      if (window.innerWidth < 768) return 25;
      return 40;
    };
    
    // Particles config
    const particlesArray: Particle[] = [];
    const numberOfParticles = getParticleCount();
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      shape: string;
      rotation: number;
      rotationSpeed: number;
      
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        
        // Adjust size based on screen dimensions for better mobile appearance
        const baseSize = Math.min(window.innerWidth, window.innerHeight) / 50;
        this.size = Math.random() * baseSize + baseSize;
        
        // Slower movement for mobile
        const speedFactor = window.innerWidth < 768 ? 0.3 : 0.4;
        this.speedX = (Math.random() * 2 - 1) * speedFactor;
        this.speedY = (Math.random() * 2 - 1) * speedFactor;
        
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        
        // Different blue shades
        const colors = [
          'rgba(0, 71, 171, ',
          'rgba(13, 110, 253, ',
          'rgba(25, 135, 209, ',
          'rgba(0, 123, 255, ',
          'rgba(72, 149, 239, ',
        ];
        
        // Choose random shape
        const shapes = ['rectangle', 'triangle', 'line'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.color = `${randomColor}${Math.random() * 0.3 + 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        // Bounce off edges
        if (this.x > window.innerWidth || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > window.innerHeight || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        
        switch(this.shape) {
          case 'rectangle':
            // Slightly elongated rectangles
            ctx.fillRect(-this.size/2, -this.size/4, this.size, this.size/2);
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size/2);
            ctx.lineTo(this.size/2, this.size/2);
            ctx.lineTo(-this.size/2, this.size/2);
            ctx.closePath();
            ctx.fill();
            break;
          case 'line':
            ctx.beginPath();
            ctx.moveTo(-this.size, 0);
            ctx.lineTo(this.size, 0);
            // Thicker lines
            ctx.lineWidth = this.size/4;
            ctx.stroke();
            break;
        }
        
        ctx.restore();
      }
    }
    
    // Initialize particles
    const init = () => {
      // Clear any existing particles
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Connect with straight lines - optimize for mobile
      const connectionDistance = Math.min(220, window.innerWidth / 4);
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 71, 171, ${0.15 * (1 - distance/connectionDistance)})`;
            // Adjust line width based on device
            ctx.lineWidth = window.innerWidth < 768 ? 1 : 1.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Handle visibility change to improve performance when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    init();
    animate();
    
    // Cleanup
    return () => {
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      window.removeEventListener('resize', throttledResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};

export default BackgroundAnimation;