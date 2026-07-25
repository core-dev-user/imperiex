import {
  Building,
  Camera,
  Flame,
  Leaf,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Bike,
  PartyPopper,
  MapPin,
  Phone,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const services = [
  { icon: ShieldCheck, title: "Vigilante", text: "Vigilância patrimonial e controle de acesso com profissionais certificados." },
  { icon: Camera, title: "Monitoramento & CFTV", text: "Monitoramento eletrônico e circuito fechado de TV para segurança contínua." },
  { icon: UserCheck, title: "Segurança Pessoal", text: "Proteção pessoal e escolta para executivos e eventos de alto padrão." },
  { icon: Users, title: "Controlador de Acesso", text: "Controle rigoroso de entrada e saída em condomínios, empresas e eventos." },
  { icon: Bike, title: "Vigilante Motorizado", text: "Ronda motorizada para cobertura ampla de perímetros e instalações externas." },
  { icon: Sparkles, title: "Limpeza & Higienização", text: "Serviços de limpeza profissional com produtos certificados e equipe treinada." },
  { icon: Building, title: "Conservação & Manutenção", text: "Manutenção predial, conservação de áreas comuns e serviços técnicos especializados." },
  { icon: UserCheck, title: "Recepcionista", text: "Atendimento profissional em recepção corporativa com postura e excelência." },
  { icon: Flame, title: "Bombeiro Civil", text: "Prevenção e combate a incêndios com brigadistas certificados pelo Corpo de Bombeiros." },
  { icon: Leaf, title: "Jardineiro", text: "Manutenção de jardins, áreas verdes e paisagismo em ambientes corporativos." },
  { icon: PartyPopper, title: "Eventos Abertos e Fechados", text: "Suporte completo de segurança, recepção e operações para eventos de qualquer porte." },
];

export function Imperador() {
  return (
    <section
      id="imperador"
      className="section-bg-soft relative overflow-hidden border-y border-border/60 bg-surface/40 py-24 sm:py-32"
    >
      <img
        src="/imperador-mark.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 hidden h-[110%] w-auto -translate-y-1/2 opacity-[0.07] brightness-0 invert [mask-image:linear-gradient(to_left,black,transparent_85%)] lg:block"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <img
                src="/logo-imperador.png"
                alt="Imperador Grupo"
                loading="lazy"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Reveal>
            <div className="mt-4">
              <SectionHeading
                eyebrow="Empresa 01 · Serviços Gerais"
                title="Imperador"
                highlight="Grupo"
                description="Empresa especializada em terceirização de serviços operacionais, com atuação estratégica em segurança patrimonial, vigilância, limpeza, conservação, recepção e suporte técnico. Presente em eventos, condomínios, empresas e instalações industriais com um padrão de excelência que transforma a forma de servir."
              />
            </div>
          </div>
          <Reveal delay={120}>
            <blockquote className="surface-card rounded-2xl p-6 text-sm italic text-muted-foreground lg:max-w-xs">
              "Um jeito diferente de servir"
              <span className="mt-3 block not-italic font-semibold text-foreground">
                Qualidade total em servir
              </span>
            </blockquote>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} as="li">
              <div className="surface-card group h-full rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/40">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/12 text-gold transition-colors group-hover:bg-gold/20">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <div className="surface-card mt-10 grid gap-6 rounded-3xl p-8 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Segurança faz parte da sua vida</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Soluções integradas de proteção patrimonial e pessoal para empresas,
                condomínios e pessoas.
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                Rua Nova Paulicéia, 15 — Jardim Nova Cotia, Cotia-SP · CEP 06700-544
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                (11) 4243-8480 · (11) 9 8494-8516
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
