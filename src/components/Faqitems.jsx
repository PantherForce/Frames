import React, { useState } from 'react';

const Faqitems = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">

      <button
        className="bg-blue-50 rounded-2xl w-full text-left px-4 py-3 m-8 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800 font-medium">{question}</span>
        <span className="text-gray-500">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      {isOpen && (
        <p className="px-4 sm:px-4 ml-8 py-2 text-gray-600 text-sm sm:text-base">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Faqitems;
