import { Building2, Layers, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="section-bg relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Nossa parceria"
            title="Duas empresas."
            highlight="Uma estrutura completa."
            description="A IMPERIEX nasceu da sinergia entre empresas líderes em seus setores, unindo décadas de experiência operacional, capacidade técnica de alto nível e uma visão compartilhada de excelência — para criar a mais completa estrutura de soluções integradas do mercado."
          />
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Nossa parceria combina a agilidade dos serviços gerais e a inovação da
              tecnologia construtiva em EPS, formando um grupo com capacidade única de
              atender projetos de qualquer escala com altíssimo padrão de entrega.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Operações", text: "Segurança e suporte 24/7." },
              { icon: Layers, title: "Tecnologia", text: "Sistema ICF certificado." },
              { icon: Building2, title: "Escala", text: "Atuação nacional." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="surface-card h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                  <item.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={140}>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src="/bg-section.jpg"
              alt="Obra de engenharia premium executada pelo grupo IMPERIEX"
              loading="lazy"
              className="h-[420px] w-full object-cover transition-transform duration-[1.2s] hover:scale-105 sm:h-[520px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-background/75 p-5 backdrop-blur">
              <p className="text-sm text-muted-foreground">
                Integração vertical entre operações e engenharia — menos intermediários,
                mais previsibilidade.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
