'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type AboutUsProps = {
  dictionary: {
    title: string;
    description: string;
    image: string;
  };
};

export default function AboutUs({ dictionary }: AboutUsProps) {
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
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Texto */}
        <div className="md:w-1/2 space-y-6">
          <h2 className={`text-4xl font-bold text-center md:text-left mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {dictionary.title}
          </h2>
          <p className={`text-lg md:text-xl text-center md:text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {dictionary.description}
          </p>
        </div>

        {/* Foto */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={dictionary.image}
            alt="Equipe Axisbyte"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
