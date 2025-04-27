'use client';

import { useTheme } from 'next-themes';

export default function AboutUs() {
  const { theme } = useTheme(); // Obtém o tema atual (claro ou escuro)

  return (
    <section className={`py-12 ${theme === 'dark' ? 'text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Texto */}
        <div className="md:w-1/2 space-y-6">
          <h2 className={`text-4xl font-bold text-center md:text-left mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Quem Somos
          </h2>
          <p className={`text-lg md:text-xl text-center md:text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Axisbyte Forge Co. é uma empresa especializada na criação de soluções digitais inteligentes e escaláveis.
            Desenvolvemos sites, aplicativos e sistemas personalizados, sempre focados em performance, agilidade e
            inovação. Nosso objetivo é transformar tecnologia em tempo para nossos clientes crescerem com mais liberdade.
          </p>
        </div>

        {/* Foto */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/team.png"
            alt="Equipe Axisbyte"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
