'use client';

import { FaRegThumbsUp, FaRegLightbulb, FaShieldAlt, FaCog } from 'react-icons/fa'; // Para os ícones
import { useTheme } from 'next-themes';

const benefits = [
  {
    icon: <FaRegThumbsUp className="text-3xl text-blue-500" />,
    title: "Solução sob medida",
    description: "Desenvolvemos sistemas personalizados para o seu negócio, atendendo às suas necessidades específicas.",
  },
  {
    icon: <FaRegLightbulb className="text-3xl text-yellow-500" />,
    title: "Inovação constante",
    description: "Estamos sempre atualizados com as últimas tendências e tecnologias, trazendo inovação ao seu software.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-green-500" />,
    title: "Segurança garantida",
    description: "Implementamos as melhores práticas de segurança para proteger os dados do seu negócio e de seus clientes.",
  },
  {
    icon: <FaCog className="text-3xl text-red-500" />,
    title: "Suporte contínuo",
    description: "Oferecemos suporte técnico contínuo para garantir o funcionamento perfeito do seu sistema ao longo do tempo.",
  },
];

export default function Benefits() {
  const { theme } = useTheme(); // Obtém o tema atual (claro ou escuro)

  return (
    <section className={`py-12 ${theme === 'dark' ? 'text-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Por que escolher a AxisByte?
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Entenda por que nossa abordagem é a ideal para o crescimento e sucesso do seu negócio.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
