// components/CallToBetaTesters.tsx
import React from "react";
import { cn } from "@/lib/utils"; // Ajuste conforme sua implementação do 'cn' ou utilitário para combinar classes
import { buttonVariants } from "./ui/button";

const CallToBetaTesters: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-card-foreground">
          Torne-se um Beta Tester do Axisbyte
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground sm:text-lg">
          Ajude a moldar o futuro do Axisbyte e tenha acesso exclusivo a
          novas funcionalidades enquanto ainda estamos aprimorando a plataforma!
        </p>
        <div className="mt-8 flex justify-center gap-8">
          <div className="bg-card p-8 rounded-lg shadow-lg border border-muted-foreground max-w-[400px] w-full">
            <h3 className="text-xl font-semibold text-card-foreground">
              Benefícios para Beta Testers
            </h3>
            <ul className="mt-4 text-muted-foreground text-left space-y-2">
              <li>🔑 Acesso antecipado às funcionalidades do Axisbyte.</li>
              <li>🚀 Contribua diretamente no desenvolvimento da plataforma.</li>
              <li>📝 Envie sugestões e ideias para melhorar a plataforma.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="https://forms.gle/6DT6awF1XbrdDjxRA"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Inscreva-se como Beta Tester
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToBetaTesters;
