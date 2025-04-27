'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

type PartnersCarouselProps = {
    dictionary: {
        title: string;
        partners: { name: string; logo: string }[];
    };
    intervalTime?: number; // novo parâmetro
};

export default function PartnersCarousel({ dictionary, intervalTime = 3000 }: PartnersCarouselProps) {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            '(max-width: 768px)': { // Para telas pequenas
                slides: {
                    perView: 1, // Exibe 1 item por vez em telas pequenas
                },
            },
        },
    });

    const { theme } = useTheme(); // Obtendo o tema atual (claro ou escuro)

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

    return (
        <section className={`py-12 ${theme === 'dark' ? 'text-white' : 'bg-white text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">{dictionary.title}</h2>
                <div ref={sliderRef} className="keen-slider">
                    {dictionary.partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`keen-slider__slide flex justify-center items-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg`}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-50 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
