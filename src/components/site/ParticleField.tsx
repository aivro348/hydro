import { useEffect, useRef } from "react";

/**
 * Canvas-based animated particle network with floating connections.
 * Creates a premium 3D depth effect behind the hero section.
 */
export function ParticleField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      depth: number; // 0-1, simulates Z-axis
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 60;
    const CONNECTION_DISTANCE = 140;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.scale(dpr, dpr);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const depth = Math.random();
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4 * (0.3 + depth),
          vy: (Math.random() - 0.5) * 0.3 * (0.3 + depth),
          radius: 1.2 + depth * 2,
          opacity: 0.15 + depth * 0.35,
          depth,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const avgDepth = (particles[i].depth + particles[j].depth) / 2;
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.12 * avgDepth;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(210, 175, 100, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(210, 175, 100, ${p.opacity})`;
        ctx!.fill();

        // Add glow on larger particles
        if (p.depth > 0.6) {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
          gradient.addColorStop(0, `rgba(210, 175, 100, ${p.opacity * 0.3})`);
          gradient.addColorStop(1, "rgba(210, 175, 100, 0)");
          ctx!.fillStyle = gradient;
          ctx!.fill();
        }
      }

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
