
// PriceCard.js
import React from 'react';

const Pricecard = ({ plan, price, features, isAnnual, isBestDeal }) => {
  return (
    <div style={{width : '20em'}} className={`p-6 rounded-lg   shadow-md ${isBestDeal ? 'border-2 border-orange-500' : ''} bg-white`}>
      {isBestDeal && <span className="text-orange-500 text-xs font-bold uppercase px-3 py-1 rounded-full border border-orange-500 float-right -mt-6 mr-6">Best deal</span>}
      <h3 className="font-bold text-lg">{plan}</h3>
      <p className="text-gray-600">So you can see how incredible our tool is.</p>
      <p className="text-4xl font-bold">{isAnnual ? `$${(price * 12 * 0.7).toFixed(0)}` : `$${price}`}<span className="text-lg">/mo</span></p>
      <p className="text-gray-600">{isAnnual ? 'Billed annually' : 'Billed monthly'}</p>
      <button className="w-full bg-black text-white mt-6 py-2 rounded-md hover:bg-gray-900 transition duration-300">
        Get started
      </button>
      <div className="mt-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricecard;
