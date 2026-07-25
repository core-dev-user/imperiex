import { Play } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { StarsBackground } from "@/components/ui/stars";

// 7 esferas orbitando o vídeo — imagens PNG com fundo transparente
const spheres = [
  { src: "/esfera-economia.png", label: "50% mais econômica", size: 108, duration: 42 },
  { src: "/esfera-sustentabilidade.png", label: "Sustentabilidade", size: 92, duration: 42 },
  { src: "/esfera-termica.png", label: "Estrutura térmica", size: 100, duration: 42 },
  { src: "/esfera-acustica.png", label: "Estrutura acústica", size: 88, duration: 42 },
  { src: "/esfera-estabilidade.png", label: "Estabilidade estrutural", size: 104, duration: 42 },
  { src: "/esfera-seguranca.png", label: "Segurança estrutural", size: 96, duration: 42 },
  { src: "/esfera-previsibilidade.png", label: "Previsibilidade", size: 90, duration: 42 },
] as const;

export function VideoOrbit() {
  return (
    <StarsBackground
      id="video"
      className="relative overflow-hidden border-y border-border/60 bg-[linear-gradient(180deg,var(--background),color-mix(in_oklab,var(--surface)_70%,var(--background)),var(--background))] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionHeading
          eyebrow="Institucional"
          title="7 pilares"
          highlight="orbitando uma só visão"
          align="center"
          description="Cada esfera representa um vetor do sistema construtivo IMPERIEX — economia, sustentabilidade, desempenho térmico e acústico, estabilidade, segurança e previsibilidade."
        />

        <Reveal delay={140}>
          <div className="relative mx-auto mt-20 aspect-square w-full max-w-[620px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_65%)] blur-3xl [animation:pulse-glow_7s_ease-in-out_infinite]"
            />

            {/* Anéis concêntricos */}
            {[0, 1, 2, 3].map((ring) => (
              <div
                key={ring}
                aria-hidden="true"
                className="absolute rounded-full border border-border/60"
                style={{
                  inset: `${ring * 5}%`,
                  transform: `rotate(${ring * 18}deg)`,
                  opacity: 0.5 - ring * 0.1,
                }}
              />
            ))}

            {/* Núcleo de vídeo */}
            <div className="absolute inset-[16%] overflow-hidden rounded-full border border-gold/30 shadow-[var(--shadow-glow)]">
              <video
                className="h-full w-full object-cover"
                src="/shenlong3.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/bg-video.jpg"
                aria-label="Vídeo institucional IMPERIEX"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.2),transparent_55%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full ring-1 ring-inset ring-gold/25"
              />
            </div>

            {/* 7 esferas orbitando */}
            {spheres.map((s, i) => {
              const startAngle = (i * 360) / spheres.length;
              return (
                <div
                  key={s.src}
                  className="pointer-events-none absolute inset-0"
                  style={{ transform: `rotate(${startAngle}deg)` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      animation: `orbit-spin ${s.duration}s linear infinite`,
                    }}
                  >
                    <div
                      className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        animation: `orbit-spin ${s.duration}s linear infinite reverse`,
                      }}
                    >
                      <img
                        src={s.src}
                        alt={`Pilar IMPERIEX — ${s.label}`}
                        loading="lazy"
                        width={s.size}
                        height={s.size}
                        className="drop-shadow-[0_0_28px_color-mix(in_oklab,var(--gold)_55%,transparent)]"
                        style={{
                          height: s.size,
                          width: s.size,
                          transform: `rotate(${-startAngle}deg)`,
                        }}
                      />
                    </div>
                  </div>
                </div>

              );
            })}
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur">
            <Play className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Tecnologia construtiva em movimento
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur">
            7 vetores · 1 grupo integrado
          </span>
        </div>
      </div>
    </StarsBackground>
  );
}
