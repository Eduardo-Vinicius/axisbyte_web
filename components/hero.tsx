'use client';

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from 'next-themes';

export function Hero(props: {
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  mediaType: "video" | "image"; // novo parâmetro
  mediaSrc: string;             // novo parâmetro
}) {
  const { theme } = useTheme(); // Obtém o tema atual (claro ou escuro)

  return (
    <section className={`py-32 md:py-48 lg:py-52 ${theme === 'dark' ? 'text-white' : 'bg-white'}`}>
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Texto e Botões */}
        <div className={`flex max-w-[64rem] flex-col items-center text-center space-y-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl">
            {props.title}
          </h1>
          <p className={`max-w-[42rem] leading-normal ${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'} sm:text-xl sm:leading-8`}>
            {props.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Link
              href={props.primaryCtaLink}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {props.primaryCtaText}
            </Link>

            <Link
              href={props.secondaryCtaLink}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), ` ${theme === 'dark' ? 'text-white' : 'text-black'}`)}
            >
              {props.secondaryCtaText}
            </Link>
          </div>

          {props.credits && (
            <p className="text-sm text-muted-foreground mt-4">{props.credits}</p>
          )}
        </div>

        {/* Mídia Dinâmica */}
        <div className="w-full max-w-md">
          {props.mediaType === "video" ? (
            <video
              src={props.mediaSrc}
              controls
              className={`rounded-2xl shadow-lg ${theme === 'dark' ? 'border-2 border-gray-800' : ''}`}
            >
              Seu navegador não suporta vídeos HTML5.
            </video>
          ) : (
            <img
              src={props.mediaSrc}
              alt="Demonstração da criação de projetos Axisbyte"
              className={`rounded-2xl shadow-lg ${theme === 'dark' ? 'border-2 border-gray-800' : ''}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
