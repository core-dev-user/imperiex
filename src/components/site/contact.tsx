import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const areas = ["Serviços Gerais", "Tecnologia EPS", "Solução Integrada"];

const infos = [
  { icon: Mail, label: "Email", value: "icfi@imperadorgrupo.com.br", href: "mailto:icfi@imperadorgrupo.com.br" },
  { icon: MapPin, label: "Localização", value: "São Paulo, SP — Brasil" },
  { icon: MessageCircle, label: "WhatsApp", value: "(11) 98872-1997", href: "https://wa.me/5511988721997" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section-bg relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--gold)_12%,transparent),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="surface-card mb-16 rounded-3xl p-8 text-center sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Vamos construir juntos
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Construindo o futuro através da união entre{" "}
              <em className="not-italic text-gradient-gold">experiência, execução</em> e
              inovação.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
              Fale com nosso time e descubra como podemos transformar seu próximo projeto
              em referência de excelência.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Entre em contato"
              title="Vamos conversar sobre"
              highlight="seu projeto"
              description="Nossa equipe está pronta para apresentar nossas soluções, analisar seus projetos e construir uma parceria de alto valor para o seu negócio."
            />
            <ul className="mt-10 space-y-4">
              {infos.map((info, i) => (
                <Reveal key={info.label} delay={i * 90} as="li">
                  <div className="surface-card flex items-start gap-4 rounded-2xl p-5">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                      <info.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="break-words text-sm font-semibold text-foreground transition-colors hover:text-gold"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="surface-card rounded-3xl p-7 sm:p-9"
              aria-label="Formulário de contato"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Nome" placeholder="Seu nome completo" required />
                <Field id="email" label="Email" type="email" placeholder="voce@empresa.com" required />
                <Field id="phone" label="Telefone" type="tel" placeholder="(11) 90000-0000" />
                <div>
                  <label htmlFor="area" className="mb-2 block text-sm font-medium">
                    Área de interesse
                  </label>
                  <select
                    id="area"
                    name="area"
                    className="h-12 w-full rounded-xl border border-input bg-background/60 px-4 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-ring"
                    defaultValue={areas[0]}
                  >
                    {areas.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Conte um pouco sobre o seu projeto"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_var(--gold)] transition-transform duration-300 hover:scale-[1.01]"
              >
                Enviar mensagem
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                {sent ? (
                  <span className="flex items-center gap-2 text-gold">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Recebemos sua mensagem. Retornaremos em breve.
                  </span>
                ) : (
                  "Respondemos em até 1 dia útil."
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-input bg-background/60 px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
