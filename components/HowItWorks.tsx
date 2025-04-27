'use client';

import { useTheme } from 'next-themes'; // Importa o hook
import { FaRegHandshake, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa'; // Ícones

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
  const { theme } = useTheme(); // Pega o tema atual

  return (
    <section className={`py-12 ${theme === 'dark' ? 'text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Como Funciona?
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Veja como nossa abordagem ajudará a transformar o seu negócio em 4 etapas simples e eficazes.
        </p>

        {/* Etapas do Processo */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full lg:w-1/4">
              <div className={`flex items-center justify-center mb-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'}`}>
                {step.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
