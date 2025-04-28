'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type Testimonial = {
  name: string;
  company: string;
  text: string;
  image: string;
};

type TestimonialsCarouselProps = {
  intervalTime?: number; // Novo parâmetro para o intervalo do carrossel
  dictionary: {
    title: string;
    items: Testimonial[];
  };
};

export default function TestimonialsCarousel({ intervalTime = 3000, dictionary }: TestimonialsCarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
        },
      },
    },
  });

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let interval: number | undefined;
    if (instanceRef.current) {
      interval = window.setInterval(() => {
        instanceRef.current?.next();
      }, intervalTime);
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [instanceRef, intervalTime]);

  if (!mounted) {
    return null;
  }

  return (
    <section className={`py-12 ${theme === 'dark' ? 'text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {dictionary.title}
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {dictionary.items.map((testimonial, index) => (
            <div
              key={index}
              className={`keen-slider__slide flex justify-center items-center p-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg`}
            >
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-20 w-20 rounded-full mx-auto object-cover mb-4"
                />
                <p className={`text-lg italic mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonial.text}"
                </p>
                <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {testimonial.name}
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
