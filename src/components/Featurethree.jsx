import React from 'react'

const Featurethree = () => {
  return (
    <section className="container mx-auto px-6 sm:px-12 lg:px-24 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <button className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 rounded-full px-4 py-1">
            Seamless Scheduling
          </button>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-4">
            Focus on what matters most for you
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
          </p>
          <div className="flex justify-center mt-8">
          <div className='w-full sm:w-2/3 lg:w-80 h-26 text-center bg-black p-4 rounded-2xl'>
            <blockquote className="italic text-white text-xs sm:text-sm lg:text-base">
              "I never missed a call again, the AI-driven feature is a game changer for me!"
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm  text-white">Adam, Solo founder</p>
          </div>
        </div>
        </div>
        <div className="lg:w-1/2 max-w-lg mx-auto">
          <div className="border border-dashed border-gray-300 rounded-lg p-6">
            {/* Calendar or image placeholder */}
            <div className="text-center">
              {/* Replace with actual calendar or image component */}
              <img src="https://framerusercontent.com/images/xjG69OjCFt0Z3YQvNa3HNBBP5G0.png?scale-down-to=512" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featurethree;
