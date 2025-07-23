'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type AboutUsProps = {
  dictionary: {
    title: string
    description: string
    image: string
    imageLight: string
  }
}

export default function AboutUs({ dictionary }: AboutUsProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'
  const imageToShow = isDark ? dictionary.image : dictionary.imageLight || dictionary.image

  return (
    <section className={`py-24 ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Texto */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight">
            {dictionary.title}
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {dictionary.description}
          </p>
        </div>

        {/* Imagem */}
        <div className="md:w-2/5 w-full max-w-md mx-auto">
          <img
            src={imageToShow}
            alt="Equipe Axisbyte"
            className="w-full h-auto rounded-xl object-cover shadow-xl border border-gray-200 dark:border-gray-800"
          />
        </div>
      </div>
    </section>
  )
}
