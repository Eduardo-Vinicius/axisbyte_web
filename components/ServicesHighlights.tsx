'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

type Service = {
  title: string
  description: string
  image: string
}

type ServicesHighlightsProps = {
  dictionary: {
    title: string
    services: Service[]
  }
}

export default function ServicesHighlights({ dictionary }: ServicesHighlightsProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <section className={`py-24 ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-14 tracking-tight">
          {dictionary.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dictionary.services.map((service, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800'
                  : 'bg-white border-gray-200'
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left space-y-3">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-base text-gray-400 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
