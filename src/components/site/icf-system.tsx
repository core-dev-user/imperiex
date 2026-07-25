import {
  Award,
  BadgeCheck,
  Box,
  Building2,
  CheckCircle2,
  CloudRain,
  Flame,
  Gauge,
  HardHat,
  Leaf,
  ShieldCheck,
  ShieldPlus,
  Thermometer,
  Volume2,
  XCircle,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const badges = [
  "DATec Nº 045-A",
  "Financiável Caixa",
  "NBR 15575",
  "Green Building Council",
  "+5.000 Experts",
  "9 Polos Fabris",
];

const forms = [
  {
    label: "Parede Padrão",
    name: "iForms 12",
    img: "/forma-12.jpg",
    specs: [
      ["Comprimento", "125 cm"],
      ["Altura", "40 cm"],
      ["EPS por face", "3 cm"],
      ["Núcleo concreto", "6 cm"],
      ["Espessura total", "12 cm"],
      ["Módulo de corte", "12,5 cm"],
    ],
    bullets: [] as string[],
    text: "Parede de 12 cm total com duas camadas de EPS de 3 cm cada, envolvendo núcleo de concreto armado de 6 cm. Ideal para construções residenciais e comerciais que exigem agilidade e economia.",
    highlight: false,
  },
  {
    label: "Alta Resistência",
    name: "iForms 18",
    img: "/forma-18.jpg",
    specs: [
      ["Comprimento", "125 cm"],
      ["Altura", "40 cm"],
      ["EPS por face", "4 cm"],
      ["Núcleo concreto", "10 cm"],
      ["Espessura total", "18 cm"],
      ["Módulo de corte", "17,85 cm"],
    ],
    bullets: [] as string[],
    text: "Parede de 18 cm total com EPS 4 cm por face e núcleo de concreto armado de 10 cm. Superior em desempenho térmico, acústico e estrutural. Modelo mais utilizado nas obras do sistema.",
    highlight: true,
  },
  {
    label: "Canto 90° — A Queridinha",
    name: "iForms Canto L18",
    img: "/forma-canto.jpg",
    specs: [
      ["Ângulo de encaixe", "90°"],
      ["Espessura base", "18 cm"],
      ["Esquadro automático", "100%"],
      ["Prumo garantido", "Sim"],
      ["Emenda em T", "Suportado"],
    ],
    bullets: [
      "Canto perfeito — encaixe macho/fêmea trava o esquadro automaticamente",
      "Encontro de 4 paredes sem “tira no reboco”",
      "Emenda em T — liga paredes com facilidade",
      "Pode ser usado como boneca de porta",
      "Permite pilares com 3 formatos diferentes",
    ],
    text: "A “queridinha da iForms” — forma de canto com encaixe em 90° que elimina definitivamente o problema do esquadro durante a montagem. Disponível na espessura L18.",
    highlight: false,
  },
];

const comparison = [
  { crit: "Fundação", icon: Building2, icf: "Fundação mais econômica", conv: "Fundação maior e mais cara" },
  { crit: "Mão de obra", icon: HardHat, icf: "Apenas 2 operários", conv: "4+ operários" },
  { crit: "Velocidade", icon: Gauge, icf: "50% mais rápido", conv: "Prazo convencional" },
  { crit: "Resistência", icon: ShieldPlus, icf: "Resistência estrutural máxima", conv: "Resistência menor" },
  { crit: "Térmico", icon: Thermometer, icf: "0,35 W/(m²·K)", conv: "2,28 W/(m²·K)" },
  { crit: "Acústico", icon: Volume2, icf: "45 dB", conv: "37 dB" },
  { crit: "Sustentabilidade", icon: Leaf, icf: "Resíduos mínimos", conv: "Mais resíduos gerados" },
  { crit: "Clima", icon: CloudRain, icf: "Obra em dias chuvosos", conv: "Prejudicado pela chuva" },
  { crit: "Fogo", icon: Flame, icf: "Não propaga chamas", conv: "Propaga chamas" },
];


const credentials = [
  {
    icon: BadgeCheck,
    title: "DATec Nº 045-A",
    sub: "IPT · SINAT · PBQP-H",
    text: "Certificação técnica emitida pelo Instituto de Pesquisas Tecnológicas (IPT) de São Paulo, habilitando o sistema para financiamento habitacional pela Caixa. Válida até Maio/2028.",
    meta: "Válida até 05/2028",
  },
  {
    icon: Award,
    title: "ABNT NBR 15575",
    sub: "Norma de Desempenho",
    text: "Atendimento integral à norma de desempenho para edificações habitacionais — critérios térmicos, acústicos, lumínicos e de segurança ao fogo cumpridos.",
    meta: "Conformidade integral",
  },
  {
    icon: Leaf,
    title: "Green Building Council",
    sub: "GBC Brasil",
    text: "Reconhecimento pela contribuição a práticas construtivas sustentáveis, com redução de resíduos, menor impacto ambiental e alta eficiência energética.",
    meta: "Construção sustentável",
  },
];

const kits = [
  ["01", "Kit Casa 1", "51,34 m²", "Térrea · 1 nível", "/kit-1.jpg"],
  ["02", "Kit Casa 2", "62,5 m²", "Térrea · 1 nível", "/kit-2.jpg"],
  ["03", "Kit Casa 3", "61,5 m²", "Sobrado · 2 níveis", "/kit-3.jpg"],
  ["04", "Kit Casa 4", "74,7 m²", "Sobrado · 2 níveis", "/kit-4.jpg"],
  ["05", "Kit Casa 5", "109,5 m²", "Sobrado · 2 níveis", "/kit-5.jpg"],
  ["06", "Kit Casa 6", "150 m²", "Sobrado · 2 níveis", "/kit-6.jpg"],
  ["07", "Kit Casa 7", "3 × 95 m²", "3 sobrados · 95 m² cada", "/kit-7.jpg"],
  ["BR", "Kit Casa Brasil", "46,73 m²", "Térrea · 1 nível", "/kit-brasil.jpg"],
];


const commercial = [
  ["Forma de Pagamento", "50% no aceite da proposta + 50% no carregamento. PIX, transferência ou boleto à vista."],
  ["Prazo de Produção", "Produção concluída em até 30 dias. Permanência em fábrica por mais 30 dias."],
  ["Validade da Proposta", "72 horas úteis a partir da entrega da proposta comercial."],
  ["Frete", "Modalidade FOB — responsabilidade do cliente. 9 polos fabris otimizam logística nacional."],
  ["Cancelamento", "Devolução integral nos primeiros 7 dias. 10% retido de 7 a 15 dias. Sem recomposição após 15 dias."],
  ["Sede & CNPJ", "Av. Andromêda, 885 — Alphaville, Barueri/SP · CNPJ 33.381.480/0001-37"],
];

export function IcfSystem() {
  return (
    <section id="icf" className="icf-theme section-bg-icf relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklab,var(--icf)_14%,transparent),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <img
              src="/logo-icf.png"
              alt="Grupo ICF · iForms"
              loading="lazy"
              className="h-24 w-auto object-contain brightness-0 invert"
            />
          </Reveal>
          <div>
            <Reveal delay={40}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-icf">
                <span className="h-px w-8 bg-icf/60" aria-hidden="true" />
                Empresa 02 · Tecnologia EPS
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">
                Sistema iForms ICF —{" "}
                <em className="not-italic text-gradient-icf">a revolução da construção</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Ecossistema construtivo integrado especializado em ICF (Insulated Concrete Forms):
                formas de EPS preenchidas com concreto armado que entregam velocidade,
                resistência estrutural, eficiência térmica e sustentabilidade — do projeto à
                chave na mão.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <ul className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-icf/25 bg-icf/10 px-4 py-1.5 text-xs font-medium text-icf-soft"
              >
                {b}
              </li>
            ))}
          </ul>
        </Reveal>




        <Reveal delay={80}>
          <p className="mt-16 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">As formas inteligentes.</span>{" "}
            Cada forma garante automaticamente alinhamento, esquadro, nível e prumo.
            Eliminam etapas e reduzem até 50% o tempo de obra.
          </p>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-3">
          {forms.map((f, i) => (
            <Reveal key={f.name} delay={i * 110} className="h-full">
              <article
                className={`surface-card group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 ${
                  f.highlight
                    ? "border-icf/50 shadow-[var(--shadow-icf-glow)]"
                    : "hover:border-icf/35"
                }`}
              >
                {f.highlight ? (
                  <p className="bg-icf py-2 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-background">
                    Mais utilizado
                  </p>
                ) : (
                  <p aria-hidden="true" className="py-2 text-[10px] tracking-[0.3em] opacity-0">
                    &nbsp;
                  </p>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-icf">
                    {f.label}
                  </p>
                  <h3 className="mt-2 min-h-[4rem] text-2xl font-semibold">{f.name}</h3>

                  <div className="relative mt-2 overflow-hidden rounded-2xl border border-border/60 bg-surface-2/40">
                    <img
                      src={f.img}
                      alt={`Forma ${f.name} do sistema iForms ICF`}
                      loading="lazy"
                      className="h-52 w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-icf to-transparent"
                    />
                  </div>

                  {f.bullets.length ? (
                    <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-icf"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <dl className="mt-6 space-y-2.5 text-sm">
                    {f.specs.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-2"
                      >
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd className="font-semibold text-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-auto pt-5 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>


        <Reveal>
          <div className="mt-20">
            <div className="text-center">
              <h3 className="text-3xl font-semibold sm:text-4xl">
                <span className="text-icf">iForms</span> x Convencional
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
                Comparativo baseado em tabela SINAPI Fev/22 SP — residência de 62,5 m², 2
                quartos.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-icf/30 bg-icf/10 px-4 py-1.5 text-xs font-medium text-icf">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Sistema certificado • DATec 045-A
              </span>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5">
              {/* Coluna iForms */}
              <div className="overflow-hidden rounded-2xl border border-icf/40 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--icf)_10%,transparent),color-mix(in_oklab,var(--icf)_4%,transparent))] shadow-[0_0_50px_-30px_var(--icf)]">
                <div className="flex items-center justify-center gap-3 border-b border-icf/25 px-6 py-6">
                  <Box className="h-6 w-6 text-icf" aria-hidden="true" />
                  <p className="text-lg font-semibold text-icf">iFORMS ICF</p>
                </div>
                <ul>
                  {comparison.map((row) => (
                    <li
                      key={row.crit}
                      className="flex items-center gap-3 border-b min-h-[68px] border-icf/15 px-6 py-4 text-sm transition-colors last:border-b-0 hover:bg-icf/[0.08]"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-icf" aria-hidden="true" />
                      <span className="font-medium text-foreground">{row.icf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna critério (centro) */}
              <div className="order-first overflow-hidden rounded-2xl border border-border/70 bg-surface/50 backdrop-blur lg:order-none">
                <div className="flex items-center justify-center border-b border-border/70 px-6 py-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Critério
                  </p>
                </div>
                <ul>
                  {comparison.map((row) => (
                    <li
                      key={row.crit}
                      className="flex items-center justify-center gap-3 border-b min-h-[68px] border-border/60 px-6 py-4 last:border-b-0"
                    >
                      <row.icon
                        className="h-5 w-5 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/85">
                        {row.crit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna convencional */}
              <div className="overflow-hidden rounded-2xl border border-destructive/40 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--destructive)_10%,transparent),color-mix(in_oklab,var(--destructive)_4%,transparent))] shadow-[0_0_50px_-30px_var(--destructive)]">
                <div className="flex items-center justify-center gap-3 border-b border-destructive/25 px-6 py-6">
                  <Building2 className="h-6 w-6 text-destructive" aria-hidden="true" />
                  <p className="text-lg font-semibold text-destructive">MÉTODO CONVENCIONAL</p>
                </div>
                <ul>
                  {comparison.map((row) => (
                    <li
                      key={row.crit}
                      className="flex items-center gap-3 border-b min-h-[68px] border-destructive/15 px-6 py-4 text-sm transition-colors last:border-b-0 hover:bg-destructive/[0.08]"
                    >
                      <XCircle className="h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
                      <span className="text-muted-foreground">{row.conv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>


        <div className="mt-16">
          <Reveal>
            <h3 className="text-2xl font-semibold">Credenciais técnicas</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Único sistema ICF do Brasil com certificação DATec habilitada para
              financiamento pela Caixa Econômica Federal.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {credentials.map((c, i) => (
              <Reveal key={c.title} delay={i * 110}>
                <div className="surface-card group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-icf/45 hover:shadow-[var(--shadow-icf-glow)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--icf)_30%,transparent),transparent_70%)] opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-icf/60 to-transparent"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-icf/30 bg-icf/12 text-icf transition-transform duration-500 group-hover:scale-105">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-icf/25 bg-icf/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-icf-soft">
                      {c.meta}
                    </span>
                  </div>
                  <h4 className="mt-6 text-xl font-semibold">{c.title}</h4>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-icf">{c.sub}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>


        <div className="mt-16">
          <Reveal>
            <h3 className="text-2xl font-semibold">Linha habitacional</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Soluções pré-dimensionadas com projeto estrutural, planta, isométrico 3D e
              proposta comercial. Prontas para execução imediata.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kits.map(([n, name, area, type, img], i) => (
              <Reveal key={name} delay={(i % 4) * 80} as="li">
                <div className="surface-card group relative h-full overflow-hidden rounded-2xl p-0 transition-all duration-400 hover:-translate-y-1 hover:border-icf/45">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={img}
                      alt={`${name} — ${area}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-icf/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-icf">
                      {n}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <p className="mt-1 font-display text-2xl font-semibold text-foreground">
                      {area}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {type}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-2xl font-semibold">Condições comerciais</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Proposta para fornecimento de produto.
            </p>
          </Reveal>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commercial.map(([k, v], i) => (
              <Reveal key={k} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-icf/25 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--icf)_10%,transparent),color-mix(in_oklab,var(--surface)_80%,transparent))] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-icf/50 hover:shadow-[var(--shadow-icf-glow)]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-icf/60 to-transparent"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--icf)_28%,transparent),transparent_70%)] opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <dt className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-icf/30 bg-icf/12 text-icf transition-transform duration-500 group-hover:scale-105">
                      <Building2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {k}
                  </dt>
                  <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">{v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

        </div>
      </div>
    </section>
  );
}
