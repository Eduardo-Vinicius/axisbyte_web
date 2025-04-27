'use client';

import { FaRegThumbsUp, FaRegLightbulb, FaShieldAlt, FaCog } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const iconMap = {
  FaRegThumbsUp: <FaRegThumbsUp className="text-3xl text-blue-500" />,
  FaRegLightbulb: <FaRegLightbulb className="text-3xl text-yellow-500" />,
  FaShieldAlt: <FaShieldAlt className="text-3xl text-green-500" />,
  FaCog: <FaCog className="text-3xl text-red-500" />,
};

interface BenefitsProps {
  dictionary: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  }
}

export default function Benefits({ dictionary }: BenefitsProps) {
  const { theme } = useTheme();

  return (
    <section className={`py-12 ${theme === 'dark' ? 'text-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {dictionary.title}
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {dictionary.subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dictionary.items.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
            >
              <div className="mb-4">
                {iconMap[item.icon as keyof typeof iconMap] || <div />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
