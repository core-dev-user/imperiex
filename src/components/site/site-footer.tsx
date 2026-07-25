const nav = [
  ["Início", "#hero"],
  ["A Parceria", "#about"],
  ["Tecnologia", "#video"],
  ["Empresas", "#companies"],
  ["Projetos", "#gallery"],
  ["Depoimentos", "#feedback"],
];

const empresas = [
  ["Imperador Grupo", "#imperador"],
  ["Grupo ICF · iForms", "#icf"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/50">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/imperiex-logo.png"
              alt="IMPERIEX"
              className="h-14 w-auto object-contain brightness-0 invert"
              width={140}
              height={40}
              loading="lazy"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A união estratégica entre empresas líderes em serviços gerais e tecnologia
              construtiva em EPS. Excelência integrada, entrega garantida.
            </p>
          </div>

          <FooterCol title="Navegação" links={nav} />
          <FooterCol title="Empresas" links={empresas} />

          <div>
            <h3 className="text-sm font-semibold">Contato</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="https://wa.me/5511988721997" className="transition-colors hover:text-gold">
                  (11) 98872-1997
                </a>
              </li>
              <li>
                <a href="mailto:contato@imperiex.com.br" className="break-words transition-colors hover:text-gold">
                  contato@imperiex.com.br
                </a>
              </li>
              <li>São Paulo, SP — Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 IMPERIEX. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#hero" className="transition-colors hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#hero" className="transition-colors hover:text-foreground">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="transition-colors hover:text-gold">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
