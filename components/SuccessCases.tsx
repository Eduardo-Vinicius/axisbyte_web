'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

type SuccessCase = {
    title: string;
    description: string;
    image: string;
    link: string;
};

type SuccessCasesCarouselProps = {
    intervalTime?: number; // Novo parâmetro para o intervalo do carrossel
};

const successCases: SuccessCase[] = [
    {
        title: 'Transformação Digital da Empresa X',
        description:
            'A Empresa X implementou nossa solução e teve um aumento de 30% na produtividade com a automação de processos.',
        image: '/images/success-cases/empresa-x.jpg',
        link: '/casos-de-sucesso/empresa-x',
    },
    {
        title: 'Otimização de Processos na Startup Y',
        description:
            'Com a nossa plataforma, a Startup Y conseguiu reduzir o tempo de resposta ao cliente em 50%.',
        image: '/images/success-cases/startup-y.jpg',
        link: '/casos-de-sucesso/startup-y',
    },
    {
        title: 'Aumento de Eficiência na Tech Solutions',
        description:
            'A Tech Solutions melhorou a colaboração entre equipes com a nossa ferramenta de gestão de projetos, resultando em um aumento de 20% na eficiência.',
        image: '/images/success-cases/tech-solutions.jpg',
        link: '/casos-de-sucesso/tech-solutions',
    },
];

export default function SuccessCasesCarousel({ intervalTime = 3000 }: SuccessCasesCarouselProps) {
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
                <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Casos de Sucesso
                </h2>
                <div ref={sliderRef} className="keen-slider">
                    {successCases.map((successCase, index) => (
                        <div
                            key={index}
                            className={`keen-slider__slide flex justify-center items-center p-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg`}
                        >
                            <div className="text-center">
                                <img
                                    src={successCase.image}
                                    alt={successCase.title}
                                    className="h-40 w-full object-cover rounded-lg mb-4"
                                />
                                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    {successCase.title}
                                </h3>
                                <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {successCase.description}
                                </p>
                                <a
                                    href={successCase.link}
                                    className={`text-indigo-600 hover:text-indigo-800 font-semibold ${theme === 'dark' ? 'text-indigo-400' : ''}`}
                                >
                                    Saiba mais
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
