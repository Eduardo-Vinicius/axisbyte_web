'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FaRegHandshake, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa';

type Step = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type HowItWorksProps = {
  dictionary: {
    title: string;
    description: string;
    steps: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
};

const iconMap: { [key: string]: JSX.Element } = {
  FaRegHandshake: <FaRegHandshake className="text-3xl text-blue-500" />,
  FaCode: <FaCode className="text-3xl text-green-500" />,
  FaRocket: <FaRocket className="text-3xl text-yellow-500" />,
  FaCheckCircle: <FaCheckCircle className="text-3xl text-red-500" />,
};

export default function HowItWorks({ dictionary }: HowItWorksProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className={`py-12 ${theme === 'dark' ? 'text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {dictionary.title}
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {dictionary.description}
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {dictionary.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full lg:w-1/4">
              <div className={`flex items-center justify-center mb-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'}`}>
                {iconMap[step.icon]}
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
