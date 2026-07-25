import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    title: "Kit Casa iForms",
    cat: "Habitação modular",
    meta: "EPS estrutural",
    img: "/kit-5.jpg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  { title: "Formas EPS Modulares", cat: "Produto", meta: "iForms 12 · 18", img: "/forma-18.jpg", span: "" },
  { title: "Obras Industriais", cat: "Operação", meta: "Imperador Grupo", img: "/bg-imperador.jpg", span: "" },
  { title: "Engenharia Premium", cat: "Projeto", meta: "Execução técnica", img: "/bg-section.jpg", span: "" },
  { title: "Tecnologia Construtiva", cat: "Inovação", meta: "Sistema ICF", img: "/bg-video.jpg", span: "" },
  { title: "Desenvolvimento Urbano", cat: "Master plan", meta: "Escala nacional", img: "/bg-gal1.jpg", span: "sm:col-span-2 lg:col-span-4" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-bg relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nossos projetos"
          title="Portfólio de"
          highlight="excelência"
          align="center"
          description="Conheça a estrutura completa da IMPERIEX — 2025."
        />

        <div className="mt-14 grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 80} className={p.span}>
              <figure className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/40">
                <img
                  src={p.img}
                  alt={`Projeto IMPERIEX — ${p.title}`}
                  loading="lazy"
                  className="h-full w-full scale-[1.02] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent transition-opacity duration-500 group-hover:from-background/95"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/10 transition-all duration-500 group-hover:ring-gold/40"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-10 -top-24 h-40 rotate-12 bg-gradient-to-r from-transparent via-foreground/12 to-transparent opacity-0 transition-all duration-700 group-hover:top-full group-hover:opacity-100"
                />

                <span className="absolute left-5 top-5 rounded-full border border-foreground/15 bg-background/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80 backdrop-blur-md">
                  {p.cat}
                </span>
                <img
                  src="/imperiex-logo.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute right-4 top-4 h-11 w-auto opacity-60 brightness-0 invert transition-opacity duration-500 group-hover:opacity-100"
                />

                <figcaption className="absolute inset-x-5 bottom-5">
                  <div className="flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold">{p.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{p.meta}</p>
                    </div>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <span className="mt-4 block h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-700 group-hover:w-full" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
