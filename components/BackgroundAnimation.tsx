import React, { useEffect, useRef, useCallback } from 'react';

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

  const resizeCanvas = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null) => {
    if (!ctx) return;
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

  const getParticleCount = () => {
    if (window.innerWidth < 480) return 15;
    if (window.innerWidth < 768) return 25;
    return 40;
  };

  const createParticle = (): Particle => {
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

  // Moved animate function outside of useEffect to avoid re-creating it on each render
  const animate = useCallback((ctx: CanvasRenderingContext2D, particlesArray: Particle[]) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particlesArray.forEach((particle) => {
      updateParticle(particle);
      drawParticle(ctx, particle);
    });

    requestAnimationFrame(() => animate(ctx, particlesArray));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray = Array.from({ length: getParticleCount() }, createParticle);
    resizeCanvas(canvas, ctx);

    const handleResize = () => resizeCanvas(canvas, ctx);
    window.addEventListener('resize', handleResize);

    animate(ctx, particlesArray);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [animate]); // Ensure animate is part of the dependency array

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};

export default BackgroundAnimation;
