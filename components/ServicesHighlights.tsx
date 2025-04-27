'use client';

import { useTheme } from 'next-themes';

export default function ServicesHighlights() {
  const { theme } = useTheme(); // Obtendo o tema atual (claro ou escuro)
  
  const services = [
    {
      title: 'Desenvolvimento de Sites Responsivos',
      description: 'Criamos sites modernos, rápidos e otimizados para qualquer dispositivo, com foco em experiência do usuário e performance.',
      image: '/images/web-development.jpg',
    },
    {
      title: 'Criação de Aplicativos Mobile (Flutter)',
      description: 'Desenvolvemos apps móveis de alta performance com Flutter, garantindo uma experiência consistente em Android e iOS.',
      image: '/images/mobile-development.jpg',
    },
    {
      title: 'Soluções sob Medida (Sistemas e APIs)',
      description: 'Construímos soluções personalizadas, desde sistemas completos até APIs, para atender necessidades específicas do seu negócio.',
      image: '/images/custom-solutions.jpg',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Destaques dos Nossos Serviços</h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-2xl border border-gray-200'
              }`}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className={`p-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
