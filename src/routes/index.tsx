import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { VideoOrbit } from "@/components/site/video-orbit";
import { About } from "@/components/site/about";
import { Companies } from "@/components/site/companies";
import { Imperador } from "@/components/site/imperador";
import { IcfSystem } from "@/components/site/icf-system";
import { Differentials } from "@/components/site/differentials";
import { Gallery } from "@/components/site/gallery";
import { Feedback } from "@/components/site/feedback";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";


const title = "IMPERIEX · Soluções Integradas em Construção e Tecnologia EPS";
const description =
  "Grupo IMPERIEX: serviços gerais Imperador Grupo e sistema construtivo iForms ICF em EPS. Certificação DATec 045-A, financiável Caixa e atuação nacional.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Companies />
        <Imperador />
        <IcfSystem />
        <Differentials />
        <VideoOrbit />
        <Gallery />
        <Feedback />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />

    </div>
  );
}
