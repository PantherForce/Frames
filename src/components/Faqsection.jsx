// FAQSection.js
import React from 'react';
import Faqitems from './Faqitems';

const Faqsection = () => {
  const faqs = [
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription anytime from your account settings.'
    },
    {
      question: 'What happens when my trial ends?',
      answer: 'After your trial ends, you will need to choose a subscription plan to continue using the service.'
    },
    {
        question: 'What payment methods do you offer?',
        answer: 'After your trial ends, you will need to choose a subscription plan to continue using the service.'
      },

      {
        question: 'What is your refund policy?',
        answer: 'After your trial ends, you will need to choose a subscription plan to continue using the service.'
      },
      {
        question: 'Do you offer discounts to educational institutions ?',
        answer: 'After your trial ends, you will need to choose a subscription plan to continue using the service.'
      },
      
    // Add other FAQs here
  ];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-8 pr-4">
      <div className="container mx-auto max-w-2xl">
        <div className='flex justify-center'>
          <button className="bg-gray-200 text-black text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-2xl m-4">
            And so much more... 💼
          </button>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6">Frequently asked questions</h2>
        <div className="space-y-4 sm: mr-16">
          {faqs.map((faq, index) => (
            <Faqitems key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqsection;
