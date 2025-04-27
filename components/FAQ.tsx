'use client';

import React, { useState } from "react";
import { useTheme } from 'next-themes';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { theme } = useTheme(); // Obtém o tema atual (claro ou escuro)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "O que é o Axisbyte?",
      answer:
        "Axisbyte é uma plataforma de treinamento personalizada que ajuda academias e usuários a monitorarem seu progresso e criarem treinos adaptados às suas necessidades.",
    },
    {
      question: "Como posso me inscrever no beta?",
      answer:
        "Você pode se inscrever no beta acessando nossa página de inscrição e preenchendo o formulário com seus dados.",
    },
    {
      question: "O que está incluído no plano Early Access?",
      answer:
        "O plano Early Access oferece acesso antecipado a todas as funcionalidades da plataforma, incluindo personalização de treinos, relatórios de progresso e muito mais.",
    },
    {
      question: "O que diferencia o Axisbyte das outras plataformas?",
      answer:
        "O Axisbyte oferece um conjunto completo de ferramentas para academias e usuários individuais, com recursos exclusivos como relatórios detalhados e integração com dispositivos de monitoramento de treino.",
    },
  ];

  return (
    <section className={`py-16 md:py-24 lg:py-32 ${theme === 'dark' ? 'text-white' : 'bg-white'}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl ${theme === 'dark' ? 'text-white' : 'text-card-foreground'}`}>
          Perguntas Frequentes
        </h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-muted-foreground'} pb-6`}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className={`w-full text-left text-lg font-semibold ${theme === 'dark' ? 'text-white hover:text-primary' : 'text-card-foreground hover:text-primary'} transition-all`}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'} mt-2`}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
