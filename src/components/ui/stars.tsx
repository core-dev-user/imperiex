import * as React from "react";
import { cn } from "@/lib/utils";

type Star = {
  x: number;
  y: number;
  r: number;
  o: number;
  tw: number;
  vx: number;
  vy: number;
};

export function StarsBackground({
  className,
  children,
  density = 0.00016,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { density?: number }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(320, Math.max(60, Math.round(w * h * density)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.3,
        o: Math.random() * 0.6 + 0.2,
        tw: Math.random() * 0.02 + 0.004,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
      }));
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 1;
      for (const s of stars) {
        if (!reduced) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0) s.x = w;
          if (s.x > w) s.x = 0;
          if (s.y < 0) s.y = h;
          if (s.y > h) s.y = 0;
        }
        const alpha = reduced
          ? s.o
          : s.o + Math.sin(t * s.tw + s.x) * 0.25;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, alpha));
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    build();
    draw();

    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return (
    <div className={cn("relative isolate overflow-hidden", className)} {...props}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_50%,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_75%)]"
      />
      {children}
    </div>
  );
}
