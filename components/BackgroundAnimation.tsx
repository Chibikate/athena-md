import React, { useEffect, useRef } from 'react';

type ShapeType = 'rectangle' | 'triangle' | 'line';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  shape: ShapeType;
  color: string;
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let resizeTimeout: number | null = null;

    const mouse = { x: null as number | null, y: null as number | null };

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

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const shapes = ['rectangle', 'triangle', 'line'] as const;
    const colors = [
      'rgba(0, 71, 171, ',
      'rgba(13, 110, 253, ',
      'rgba(25, 135, 209, ',
      'rgba(0, 123, 255, ',
      'rgba(72, 149, 239, ',
    ];

    const createParticle = (): Particle => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const baseSize = Math.min(width, height) / 50;
      const speedFactor = width < 768 ? 0.3 : 0.4;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * baseSize + baseSize,
        speedX: (Math.random() * 2 - 1) * speedFactor,
        speedY: (Math.random() * 2 - 1) * speedFactor,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: `${colors[Math.floor(Math.random() * colors.length)]}${Math.random() * 0.3 + 0.2})`,
      };
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.rotation += particle.rotationSpeed;

      const width = window.innerWidth;
      const height = window.innerHeight;

      if (particle.x > width || particle.x < 0) particle.speedX = -particle.speedX;
      if (particle.y > height || particle.y < 0) particle.speedY = -particle.speedY;
    };

    const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.fillStyle = particle.color;
      ctx.strokeStyle = particle.color;

      switch (particle.shape) {
        case 'rectangle':
          ctx.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size / 2);
          ctx.lineTo(particle.size / 2, particle.size / 2);
          ctx.lineTo(-particle.size / 2, particle.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
        case 'line':
          ctx.beginPath();
          ctx.moveTo(-particle.size, 0);
          ctx.lineTo(particle.size, 0);
          ctx.lineWidth = particle.size / 4;
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const particlesArray = Array.from({ length: getParticleCount() }, createParticle);

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const particle of particlesArray) {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 120) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxForce = 0.5;
            const force = (120 - distance) / 120 * maxForce;

            particle.x += forceDirectionX * force;
            particle.y += forceDirectionY * force;
          }
        }

        updateParticle(particle);
        drawParticle(ctx, particle);
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
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);

      // Store a reference to the canvas that was used in this effect
      const canvasElement = canvas;
      const context = canvasElement.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvasElement.width, canvasElement.height);
      }
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