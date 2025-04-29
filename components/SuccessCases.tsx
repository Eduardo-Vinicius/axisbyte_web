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
          spacing: 8,
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

  if (!mounted) {
    return null
  }

  return (
    <section className={`py-16 overflow-hidden ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          data-aos="fade-up"
        >
          {dictionary.title}
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div ref={sliderRef} className="keen-slider overflow-visible">
            {dictionary.items.map((successCase, index) => (
              <div key={index} className="keen-slider__slide">
                <div
                  className="transform transition-all duration-500 h-full"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={successCase.image || "/placeholder.svg"}
                      alt={successCase.title}
                      className="w-full h-64 object-cover transition-transform duration-700"
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    <h3 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {successCase.title}
                    </h3>
                    <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      {successCase.description}
                    </p>
                    <a
                      href={successCase.link}
                      className={`inline-block mt-2 text-lg font-medium relative overflow-hidden ${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      <span className="inline-block">{dictionary.knowMore}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } shadow-lg transform transition-transform duration-300 focus:outline-none z-10`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } shadow-lg transform transition-transform duration-300 focus:outline-none z-10`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots/Progress Indicator */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? `w-8 ${theme === "dark" ? "bg-indigo-400" : "bg-indigo-600"}`
                    : `${theme === "dark" ? "bg-gray-600" : "bg-gray-300"}`
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
