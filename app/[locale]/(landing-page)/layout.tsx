"use client";

import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";
import { getDictionary } from "@/i18n/dictionaries";
import { useParams } from "next/navigation";
import React from "react";

// Função para obter o locale
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = params?.locale || "pt"
  const dict = getDictionary(locale as "pt" | "us")

  return (
    <div className="flex min-h-screen flex-col overflow-visible">
      <LandingPageHeader
        items={[]}
      />
      <main className="flex-1 overflow-visible">{children}</main>
      <Footer
        builtBy="Axisbyte Forge Co"
        builtByLink="https://github.com/Axisbyte/"
        instagramLink="https://github.com/Axisbyte/"
      />
    </div>
  );
}
