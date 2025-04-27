'use client';

import React, { useState } from "react";
import { useTheme } from 'next-themes';

type FAQProps = {
  dictionary: {
    title: string;
    faqs: { question: string; answer: string }[];
  };
};

const FAQ: React.FC<FAQProps> = ({ dictionary }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { theme } = useTheme(); // Obtém o tema atual (claro ou escuro)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`py-16 md:py-24 lg:py-32 ${theme === 'dark' ? 'text-white' : 'bg-white'}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl ${theme === 'dark' ? 'text-white' : 'text-card-foreground'}`}>
          {dictionary.title}
        </h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-6">
          {dictionary.faqs.map((faq, index) => (
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
