'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FaRegHandshake, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa'

type HowItWorksProps = {
  dictionary: {
    title: string
    description: string
    steps: {
      icon: string
      title: string
      description: string
    }[]
  }
}

const iconMap: { [key: string]: JSX.Element } = {
  FaRegHandshake: <FaRegHandshake className="text-3xl text-sky-400" />,
  FaCode: <FaCode className="text-3xl text-emerald-400" />,
  FaRocket: <FaRocket className="text-3xl text-yellow-400" />,
  FaCheckCircle: <FaCheckCircle className="text-3xl text-pink-400" />,
}

export default function HowItWorks({ dictionary }: HowItWorksProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          {dictionary.title}
        </h2>
        <p className={`text-lg mb-14 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {dictionary.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {dictionary.steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? 'bg-black border-zinc-800 hover:border-sky-500'
                  : 'bg-slate-50 border-gray-200 hover:border-blue-600'
              }`}
            >
              <div className="flex items-center justify-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                {iconMap[step.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
