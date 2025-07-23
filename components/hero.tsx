'use client'

import { useEffect, useState } from 'react'
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTheme } from 'next-themes'

export function Hero(props: {
  primaryCtaLink: string
  secondaryCtaLink: string
  mediaType: "video" | "image"
  mediaSrc: string
  mediaSrcLight: string
  dictionary: {
    title: string
    subtitle: string
    primaryCtaText: string
    secondaryCtaText: string
    noSupporthtml: string
  }
}) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'
  const mediaToShow = isDark ? props.mediaSrc : props.mediaSrcLight || props.mediaSrc

  return (
    <section className={`py-32 md:py-48 lg:py-52 ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-gray-900'}`}>
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Texto e Botões */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {props.dictionary.title}
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {props.dictionary.subtitle}
          </p>

          {/* Botões com renderização condicional após montagem */}
          {mounted && (
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href={props.primaryCtaLink}
                className={cn(buttonVariants({ size: "lg" }))}
              >
                {props.dictionary.primaryCtaText}
              </Link>

              <Link
                href={props.secondaryCtaLink}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  isDark
                    ? "border-gray-700 text-gray-200 hover:bg-gray-800"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                )}
              >
                {props.dictionary.secondaryCtaText}
              </Link>
            </div>
          )}
        </div>

        {/* Mídia */}
        <div className="w-full max-w-md flex justify-center">
          {props.mediaType === "video" ? (
            <video
              src={props.mediaSrc}
              controls
              className="rounded-2xl shadow-xl border border-gray-800"
            >
              {props.dictionary.noSupporthtml}
            </video>
          ) : (
            <img
              src={mediaToShow}
              alt="Demonstração da criação de projetos Axisbyte"
              className="rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}
