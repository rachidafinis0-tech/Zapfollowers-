
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { ChevronDownIcon } from './IconComponents';

interface FAQItemProps {
  item: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
}

const FAQAccordionItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-dark-border">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="text-lg font-semibold text-light-text">{item.question}</h3>
        <ChevronDownIcon
          className={`w-6 h-6 text-brand-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-medium-text">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-dark-bg/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light-text">Frequently Asked Questions</h2>
          <p className="text-medium-text mt-2">Have questions? We have answers.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQ_DATA.map(item => (
            <FAQAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
