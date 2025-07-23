'use client'

import { useEffect, useState } from 'react'
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTheme } from 'next-themes'

export function Hero(props: {
  primaryCtaLink: string;
  secondaryCtaLink: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  mediaSrcLight: string;
  dictionary: {
    title: string;
    subtitle: string;
    primaryCtaText: string;
    noSupporthtml: string;
  };
}) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <section className={`py-32 md:py-48 lg:py-52 ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-gray-900'}`}>
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Texto e Botões */}
        <div className="flex max-w-[64rem] flex-col items-center text-center space-y-6">
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl">
            {props.dictionary.title}
          </h1>
          <p className={`max-w-[42rem] leading-normal sm:text-xl sm:leading-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {props.dictionary.subtitle}
          </p>

          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Link
              href={props.primaryCtaLink}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {props.dictionary.primaryCtaText}
            </Link>

            {/* <Link
              href={props.secondaryCtaLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                isDark
                  ? "text-white border-white hover:bg-white/10"
                  : "text-gray-900 border-gray-900 hover:bg-gray-100"
              )}
            >
              {props.dictionary.secondaryCtaText}
            </Link> */}
          </div>
        </div>

        {/* Mídia Dinâmica */}
        <div className="w-full max-w-md">
          {props.mediaType === "video" ? (
            <video
              src={props.mediaSrc}
              controls
              className={`rounded-2xl shadow-lg ${isDark ? 'border border-gray-800' : ''}`}
            >
              {props.dictionary.noSupporthtml}
            </video>
          ) : (
            <img
              src={isDark ? props.mediaSrc : props.mediaSrcLight || props.mediaSrc}
              alt="Demonstração da criação de projetos Axisbyte"
              className={`rounded-2xl shadow-lg ${isDark ? 'border border-gray-800' : ''}`}
            />
          )}
        </div>
      </div>
    </section>
  )
}