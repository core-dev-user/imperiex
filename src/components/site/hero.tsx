import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/bg-hero.jpg')] bg-cover bg-center opacity-[0.18]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_0%,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal delay={90}>
          <h1 className="text-shine text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Soluções integradas para{" "}
            <em className="not-italic text-gradient-gold">construção</em>,{" "}
            <em className="not-italic text-gradient-gold">infraestrutura</em> e
            desenvolvimento.
          </h1>
        </Reveal>

        <Reveal delay={170}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A união estratégica entre empresas especializadas em serviços gerais e
            tecnologia construtiva em EPS — entregando excelência, escala e inovação
            para cada projeto.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_var(--gold)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Conhecer estrutura
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-2"
            >
              Falar com o time
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {[
              ["+120", "Projetos"],
              ["+15", "Anos"],
              ["+80", "Profissionais"],
              ["Nacional", "Atuação"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-semibold text-foreground">
                  {value}
                </dd>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
