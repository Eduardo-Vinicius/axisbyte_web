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

  if (!mounted) return null;

  return (
    <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          {dictionary.title}
        </h2>
        <p className="text-lg mb-12 text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
          {dictionary.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dictionary.steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg transition-all duration-300 border ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200 hover:shadow-xl'}`}
            >
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                {iconMap[step.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
