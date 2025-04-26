import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let resizeTimeout: number | null = null;

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(pixelRatio, pixelRatio);
    };

    const throttledResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resizeCanvas, 200);
    };

    window.addEventListener('resize', throttledResize);
    resizeCanvas();

    const getParticleCount = () => {
      if (window.innerWidth < 480) return 15;
      if (window.innerWidth < 768) return 25;
      return 40;
    };

    // Particle Factory
    const createParticle = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const baseSize = Math.min(width, height) / 50;
      const speedFactor = width < 768 ? 0.3 : 0.4;
      const shapes = ['rectangle', 'triangle', 'line'] as const;
      const colors = [
        'rgba(0, 71, 171, ',
        'rgba(13, 110, 253, ',
        'rgba(25, 135, 209, ',
        'rgba(0, 123, 255, ',
        'rgba(72, 149, 239, ',
      ];

      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * baseSize + baseSize;
      const speedX = (Math.random() * 2 - 1) * speedFactor;
      const speedY = (Math.random() * 2 - 1) * speedFactor;
      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.01;
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = `${colors[Math.floor(Math.random() * colors.length)]}${Math.random() * 0.3 + 0.2})`;

      return {
        x,
        y,
        size,
        speedX,
        speedY,
        rotation,
        rotationSpeed,
        shape,
        color,
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.rotation += this.rotationSpeed;

          if (this.x > width || this.x < 0) this.speedX = -this.speedX;
          if (this.y > height || this.y < 0) this.speedY = -this.speedY;
        },
        draw() {
          if (!ctx) return;
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.fillStyle = this.color;
          ctx.strokeStyle = this.color;

          switch (this.shape) {
            case 'rectangle':
              ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
              break;
            case 'triangle':
              ctx.beginPath();
              ctx.moveTo(0, -this.size / 2);
              ctx.lineTo(this.size / 2, this.size / 2);
              ctx.lineTo(-this.size / 2, this.size / 2);
              ctx.closePath();
              ctx.fill();
              break;
            case 'line':
              ctx.beginPath();
              ctx.moveTo(-this.size, 0);
              ctx.lineTo(this.size, 0);
              ctx.lineWidth = this.size / 4;
              ctx.stroke();
              break;
          }

          ctx.restore();
        }
      };
    };

    const particlesArray = Array.from({ length: getParticleCount() }, createParticle);

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }

      const connectionDistance = Math.min(220, window.innerWidth / 4);

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 71, 171, ${0.15 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = window.innerWidth < 768 ? 1 : 1.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    animate();

    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
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
