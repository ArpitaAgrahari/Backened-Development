import React, { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  // --- STATE ---
  // `openIndex` stores the index of the currently open accordion item.
  // `null` means no item is open.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // --- HANDLER FUNCTION ---
  const handleItemClick = (index: number) => {
    // If the clicked item is already open, close it (`setOpenIndex(null)`).
    // Otherwise, open the clicked item (`setOpenIndex(index)`).
    setOpenIndex(openIndex === index ? null : index);
  };

  // --- JSX ---
  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg border border-gray-200 dark:border-gray-700">
      {items.map((item, index) => (
        <div key={index} className={`border-b border-gray-200 dark:border-gray-700 last:border-b-0`}>
          {/* Accordion Item Header */}
          <button
            onClick={() => handleItemClick(index)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span>{item.question}</span>
            <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          
          {/* Accordion Item Content */}
          <div
            className={`grid transition-all duration-500 ease-in-out overflow-hidden`}
            style={{ gridTemplateRows: openIndex === index ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
               <div className="p-4 text-gray-600 dark:text-gray-400">
                {item.answer}
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion