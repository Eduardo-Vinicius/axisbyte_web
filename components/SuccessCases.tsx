'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type SuccessCases = {
  title: string;
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  knowMore: string;
};

type SuccessCasesCarouselProps = {
  intervalTime?: number; // Novo parâmetro para o intervalo do carrossel
  dictionary: SuccessCases; // Passando o dicionário como parâmetro
};

export default function SuccessCasesCarousel({ intervalTime, dictionary }: SuccessCasesCarouselProps) {
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
          {dictionary.items.map((successCase, index) => (
            <div
              key={index}
              className={`keen-slider__slide flex justify-center items-center p-6 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white'
              } rounded-lg shadow-lg`}
            >
              <div className="text-center">
                <img
                  src={successCase.image}
                  alt={successCase.title}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {successCase.title}
                </h3>
                <p
                  className={`text-lg mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {successCase.description}
                </p>
                <a
                  href={successCase.link}
                  className={`text-indigo-600 hover:text-indigo-800 font-semibold ${
                    theme === 'dark' ? 'text-indigo-400' : ''
                  }`}
                >
                  {dictionary.knowMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
