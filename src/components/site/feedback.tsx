import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const testimonials = [
  {
    name: "Carlos Menezes",
    role: "Diretor de Operações",
    company: "Alphaville Empreendimentos",
    text: "Redução de 42% no prazo de obra e um padrão de acabamento acima da média do mercado. O sistema iForms virou padrão nos nossos novos empreendimentos.",
  },
  {
    name: "Renata Oliveira",
    role: "Síndica Profissional",
    company: "Condomínio Jardim Paulista",
    text: "A equipe de segurança e recepção da IMPERIEX transformou a percepção de padrão do nosso condomínio. Presença profissional 24/7 e zero incidentes desde a troca.",
  },
  {
    name: "Eduardo Prates",
    role: "Gerente de Obras",
    company: "Construtora Novo Horizonte",
    text: "Fundação mais leve, montagem em 2 operários e conforto térmico surpreendente. A DATec da Caixa foi decisiva para o financiamento dos nossos clientes.",
  },
  {
    name: "Juliana Freitas",
    role: "Arquiteta e Urbanista",
    company: "JF Arquitetura",
    text: "O acabamento fica impecável — como se fosse concreto aparente premium. Meus clientes escolhem o iForms pela combinação de estética, isolamento e velocidade.",
  },
  {
    name: "Marco Aurélio",
    role: "CEO",
    company: "Grupo Comercial Vertex",
    text: "Terceirização com padrão de serviço próprio — nunca sentimos uma quebra na cultura. IMPERIEX é parceiro estratégico, não fornecedor.",
  },
];

export function Feedback() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="feedback" className="section-bg relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem constrói com a"
          highlight="IMPERIEX"
          align="center"
          description="Clientes, construtoras e gestores que já vivenciam o padrão do nosso grupo integrado."
        />

        <Reveal delay={140}>
          <div className="relative mt-14 overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="surface-card w-full shrink-0 rounded-3xl p-8 sm:p-12"
                >
                  <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
                  <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">
                    “{t.text}”
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    <div className="flex gap-1" aria-label="Avaliação 5 estrelas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Depoimento anterior"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => setIndex(i)}
                className={
                  "h-1.5 rounded-full transition-all duration-500 " +
                  (i === index ? "w-8 bg-gold" : "w-2 bg-border")
                }
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo depoimento"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
