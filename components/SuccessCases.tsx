"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ChevronLeft, ChevronRight } from "lucide-react"

type SuccessCases = {
  title: string
  items: {
    image: string
    title: string
    description: string
    link: string
  }[]
  knowMore: string
}

type SuccessCasesCarouselProps = {
  intervalTime?: number
  dictionary: SuccessCases
}

export default function SuccessCasesCarousel({ intervalTime = 5000, dictionary }: SuccessCasesCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let interval: number | undefined
    if (instanceRef.current && intervalTime) {
      interval = window.setInterval(() => {
        instanceRef.current?.next()
      }, intervalTime)
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval)
      }
    }
  }, [instanceRef, intervalTime])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <section className={`py-24 overflow-hidden ${isDark ? "bg-zinc-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">
          {dictionary.title}
        </h2>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider overflow-visible">
            {dictionary.items.map((successCase, index) => (
              <div key={index} className="keen-slider__slide">
                <div
                  className="h-full transform transition-all duration-500"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                  }}
                >
                  <div
                    className={`flex flex-col h-full justify-between rounded-2xl shadow-xl border ${
                      isDark ? "bg-black border-zinc-800" : "bg-white border-gray-200"
                    } hover:scale-[1.01] transition-transform duration-300`}
                    style={{ minHeight: 420 }}
                  >
                    <img
                      src={successCase.image || "/placeholder.svg"}
                      alt={successCase.title}
                      className="w-full h-60 object-cover rounded-t-2xl"
                    />
                    <div className="flex flex-col justify-between p-6 flex-grow space-y-4">
                      <h3 className="text-2xl font-semibold">{successCase.title}</h3>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300 flex-grow">
                        {successCase.description}
                      </p>
                      <a
                        href={successCase.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block font-medium text-base underline underline-offset-4 hover:opacity-80 ${
                          isDark ? "text-indigo-400" : "text-indigo-600"
                        }`}
                      >
                        {dictionary.knowMore}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Setas */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className={`absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center ${
                  isDark ? "bg-black text-white" : "bg-white text-gray-900"
                } shadow-md z-10`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className={`absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center ${
                  isDark ? "bg-black text-white" : "bg-white text-gray-900"
                } shadow-md z-10`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? `w-8 ${isDark ? "bg-indigo-400" : "bg-indigo-600"}`
                    : `w-2 ${isDark ? "bg-gray-700" : "bg-gray-300"}`
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
