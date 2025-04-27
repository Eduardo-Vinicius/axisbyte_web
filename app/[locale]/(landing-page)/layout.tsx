import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";
import React from "react";

// Função para obter o locale
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen flex-col overflow-visible">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Benefícios", href: "/#Benefits" },
          { title: "Casos de sucesso", href: "/#SuccessCasesCarousel" },
          { title: "Como Funciona?", href: "/#HowItWorks" },
          { title: "Serviços", href: "/#ServicesHighlights" },
          { title: "Depoimentos", href: "/#Testimonials" },
          { title: "Parceiros", href: "/#Partners" },
          { title: "Sobre nós", href: "/#AboutUs" },
          { title: "FAQ", href: "/#faq" },
        ]}
      />
      <main className="flex-1 overflow-visible">{children}</main>
      <Footer
        builtBy="Axisbyte Forge Co"
        builtByLink="https://github.com/Axisbyte/"
        instagramLink="https://github.com/Axisbyte/"
        twitterLink="https://github.com/Axisbyte/"
        linkedinLink="https://github.com/Axisbyte/"
      />
    </div>
  );
}
