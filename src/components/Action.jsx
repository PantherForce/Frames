import React from 'react';

const Action = () => {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to start?</h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
          Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features.
        </p>
        <button className="bg-black text-white uppercase text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-2xl hover:bg-gray-800">
          Get started, it's free
        </button>
        <div className="flex justify-center mt-8">
          <div className='w-full sm:w-2/3 lg:w-1/3 text-center bg-yellow-100 p-4 rounded-2xl'>
            <blockquote className="italic text-gray-600 text-xs sm:text-sm lg:text-base">
              "I never missed a call again, the AI-driven feature is a game changer for me!"
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm">Adam, Solo founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
