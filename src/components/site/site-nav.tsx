import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "A Parceria" },
  { href: "#video", label: "Tecnologia" },
  { href: "#companies", label: "Empresas" },
  { href: "#differentials", label: "Soluções" },
  { href: "#gallery", label: "Projetos" },
  { href: "#feedback", label: "Depoimentos" },
  { href: "#contact", label: "Contato" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8"
      >
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <img
            src="/imperiex-logo.png"
            alt="IMPERIEX — Soluções integradas"
            className="h-14 w-auto shrink-0 object-contain brightness-0 invert"
            width={140}
            height={40}
          />
          <span className="sr-only">IMPERIEX</span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511988721997"
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_var(--gold)] transition-transform duration-300 hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface/70 text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 xl:hidden",
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="space-y-1 px-5 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://wa.me/5511988721997"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
