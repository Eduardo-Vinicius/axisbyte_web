'use client';

import { FaRegHandshake, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa'; // Para ícones

type Step = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FaRegHandshake className="text-3xl text-blue-500" />,
    title: '1. Entendimento do Projeto',
    description: 'Nos reunimos com sua equipe para entender as necessidades e desafios do seu negócio.',
  },
  {
    icon: <FaCode className="text-3xl text-green-500" />,
    title: '2. Desenvolvimento Personalizado',
    description: 'Desenvolvemos o software sob medida, alinhado às suas expectativas e objetivos.',
  },
  {
    icon: <FaRocket className="text-3xl text-yellow-500" />,
    title: '3. Implementação e Lançamento',
    description: 'Testamos e implementamos a solução, garantindo que tudo funcione perfeitamente.',
  },
  {
    icon: <FaCheckCircle className="text-3xl text-red-500" />,
    title: '4. Suporte Contínuo',
    description: 'Após o lançamento, oferecemos suporte contínuo para garantir a evolução constante.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white-800 mb-4">Como Funciona?</h2>
        <p className="text-lg text-white-600 mb-8">
          Veja como nossa abordagem ajudará a transformar o seu negócio em 4 etapas simples e eficazes.
        </p>

        {/* Etapas do Processo */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full lg:w-1/4">
              <div className="flex items-center justify-center mb-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-50">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white-800 mb-2">{step.title}</h3>
              <p className="text-white-600 text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
