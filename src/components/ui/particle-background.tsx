"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; opacity: number }[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Create a subtle radial gradient for the background
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));
      gradient.addColorStop(0, "#1a1a1e"); // slightly lighter center
      gradient.addColorStop(1, "#0d0d12"); // dark edges
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 224, 224, ${p.opacity})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
    />
  );
}
