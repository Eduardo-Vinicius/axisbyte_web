'use client';

import React, { useState, useEffect } from "react";
import { useTheme } from 'next-themes';

type FAQProps = {
  dictionary: {
    title: string;
    faqs: { question: string; answer: string }[];
  };
};

const FAQ: React.FC<FAQProps> = ({ dictionary }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!mounted) {
    return (
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        {/* Você pode colocar um spinner ou loading aqui */}
      </section>
    );
  }

  return (
    <section className={`py-16 md:py-24 lg:py-32 ${theme === 'dark' ? 'bg-background text-white' : 'bg-white text-foreground'}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
          {dictionary.title}
        </h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-6">
          {dictionary.faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border pb-6"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-lg font-semibold transition-all hover:text-primary"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-muted-foreground">
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
