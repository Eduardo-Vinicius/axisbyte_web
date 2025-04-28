'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

type Service = {
  title: string;
  description: string;
  image: string;
};

type ServicesHighlightsProps = {
  dictionary: {
    title: string;
    services: Service[];
  };
};

export default function ServicesHighlights({ dictionary }: ServicesHighlightsProps) {
  const { theme } = useTheme(); // Obtendo o tema atual (claro ou escuro)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {dictionary.title}
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dictionary.services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-2xl border border-gray-200'
              }`}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className={`p-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {service.title}
                </h3>
                <p className="text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
