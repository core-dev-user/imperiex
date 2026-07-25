import {
  Boxes,
  Cpu,
  Gauge,
  Layers3,
  PiggyBank,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const items = [
  { icon: Layers3, title: "Execução Integrada", text: "Empresas parceiras, uma visão. Projetos executados com sinergia operacional total e zero fragmentação de processo." },
  { icon: Target, title: "Gestão Estratégica", text: "Metodologias avançadas que garantem eficiência, prazos cumpridos e resultado superior em cada entrega." },
  { icon: Users, title: "Equipes Especializadas", text: "Profissionais de alto nível com expertise consolidada em cada área de atuação do grupo." },
  { icon: Cpu, title: "Tecnologia Construtiva", text: "Sistemas EPS e métodos de nova geração que reduzem custo e aumentam velocidade de execução." },
  { icon: PiggyBank, title: "Redução de Custos", text: "Integração vertical que elimina intermediários e gera economia real mensurável para o cliente final." },
  { icon: TrendingUp, title: "Escalabilidade", text: "Capacidade de expandir rapidamente para atender projetos de qualquer dimensão ou complexidade." },
  { icon: Gauge, title: "Eficiência Operacional", text: "Processos otimizados que entregam máxima performance com mínimo desperdício de recursos." },
  { icon: Boxes, title: "Alto Padrão de Entrega", text: "Compromisso inabalável com qualidade em cada etapa — da concepção à entrega das chaves." },
];

const steps = [
  ["Planejamento", "Análise completa do projeto e definição de escopo, recursos e cronograma."],
  ["Estratégia", "Estratégia operacional e alocação das equipes especializadas de cada empresa."],
  ["Execução", "Implementação com rigor técnico, monitoramento contínuo e gestão ativa de riscos."],
  ["Entrega", "Entrega dentro do prazo, padrão e orçamento acordados — sem concessões."],
  ["Suporte", "Acompanhamento pós-entrega e suporte técnico contínuo para máxima performance."],
];

export function Differentials() {
  return (
    <section
      id="differentials"
      className="section-bg relative border-y border-border/60 bg-surface/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Por que nos escolher"
          title="Nossos"
          highlight="diferenciais"
          align="center"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 80} as="li">
              <div className="surface-card group h-full rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20">
          <SectionHeading eyebrow="Como trabalhamos" title="Nosso" highlight="processo" />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(([title, text], i) => (
              <Reveal key={title} delay={i * 90} as="li">
                <div className="group relative h-full rounded-2xl border border-border bg-background/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50">
                  <span className="font-display text-3xl font-semibold text-gold/30 transition-colors group-hover:text-gold/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
