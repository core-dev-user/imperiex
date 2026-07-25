import { ArrowUpRight, Cpu, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const companies = [
  {
    n: "01",
    tag: "Serviços Gerais · Imperador Grupo",
    role: "Operações & Suporte",
    icon: ShieldCheck,
    logo: "/logo-imperador.png",
    text: "Empresa de terceirização de serviços com foco em segurança, limpeza, conservação, recepção e gestão operacional. Qualidade total em servir.",
    href: "#imperador",
    cta: "Conhecer Imperador Grupo",
    accent: "gold" as const,
  },
  {
    n: "02",
    tag: "Tecnologia EPS · Grupo ICF",
    role: "Inovação Construtiva",
    icon: Cpu,
    logo: "/logo-icf.png",
    text: "Tecnologia construtiva de última geração que une inovação estrutural, agilidade de execução e eficiência térmica superior aos métodos convencionais.",
    href: "#icf",
    cta: "Explorar Sistema iForms",
    accent: "icf" as const,
  },
];

export function Companies() {
  return (
    <section id="companies" className="section-bg-light relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nossas empresas"
          title="A"
          highlight="dupla de excelência"
          align="center"
          description="Especialidades complementares operando sob uma única governança técnica."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {companies.map((c, i) => {
            const isIcf = c.accent === "icf";
            return (
              <Reveal key={c.n} delay={i * 120}>
                <article
                  className={
                    "group surface-card-light relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10 " +
                    (isIcf ? "hover:border-icf/50" : "hover:border-gold/50")
                  }
                >
                  <div
                    aria-hidden="true"
                    className={
                      "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 " +
                      (isIcf ? "bg-icf/20" : "bg-gold/15")
                    }
                  />
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <span className="font-display text-5xl font-semibold text-foreground/25">
                        {c.n}
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"
                      />
                      <img
                        src={c.logo}
                        alt={`Logotipo ${c.role}`}
                        loading="lazy"
                        className="h-16 w-auto max-w-[190px] object-contain brightness-0 invert"
                      />
                    </div>
                    <c.icon
                      className={"h-6 w-6 shrink-0 " + (isIcf ? "text-icf" : "text-gold")}
                      aria-hidden="true"
                    />
                  </div>


                  <p
                    className={
                      "mt-6 text-xs font-semibold uppercase tracking-[0.2em] " +
                      (isIcf ? "text-icf" : "text-gold")
                    }
                  >
                    {c.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{c.role}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                  <a
                    href={c.href}
                    className={
                      "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors " +
                      (isIcf ? "hover:text-icf" : "hover:text-gold")
                    }
                  >
                    {c.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
