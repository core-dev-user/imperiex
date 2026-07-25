import whatsappIcon from "@/assets/whatsapp-glyph.png.asset.json";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511988721997"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-icf-soft to-icf px-4 py-4 text-sm font-semibold text-background shadow-[0_18px_45px_-14px_var(--icf)] transition-all duration-300 hover:scale-[1.04] sm:bottom-8 sm:right-8"
    >
      <img
        src={whatsappIcon.url}
        alt=""
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
        loading="lazy"
      />
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:opacity-100">
        Fale conosco
      </span>
    </a>
  );
}
