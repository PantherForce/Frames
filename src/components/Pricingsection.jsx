// PricingSection.js
import React, { useState } from 'react';
import Pricecard from './Pricecard';

const plans = [
  {
    plan: 'Free',
    price: 0,
    features: [
      'A cool feature',
      'A basic feature',
      'A top feature with limitations',
      'An incredible feature so useful',
      'A top feature'
    ],
    isBestDeal: false
  },
  {
    plan: 'Starter',
    price: 19,
    features: [
      'All Free features, plus:',
      'A cool feature',
      'A basic feature',
      'A top feature with limitations',
      'An incredible feature so useful',
      'A cool feature'
    ],
    isBestDeal: true
  },
  {
    plan: 'Pro',
    price: 49,
    features: [
      'All Starter features, plus:',
      'A cool feature',
      'A basic feature',
      'A top feature with limitations',
      'An incredible feature so useful',
      'A premium feature',
      'You need this feature'
    ],
    isBestDeal: false
  },
];

const Pricingsection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-white p-4 sm:p-8">
    <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
      <button
        onClick={() => setIsAnnual(false)}
        className={`w-full sm:w-auto px-4 py-2 font-semibold rounded-lg transition-colors duration-300 ${!isAnnual ? 'text-white bg-black' : 'text-black bg-gray-200'}`}
      >
        Monthly
      </button>
      <button
        onClick={() => setIsAnnual(true)}
        className={`w-full sm:w-auto px-4 py-2 font-semibold rounded-lg transition-colors duration-300 ${isAnnual ? 'text-white bg-black' : 'text-black bg-gray-200'}`}
      >
        Annually
      </button>
    </div>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {plans.map((plan, index) => (
        <Pricecard key={index} {...plan} isAnnual={isAnnual} />
      ))}
    </div>
  </div>
  );
};

export default Pricingsection;
