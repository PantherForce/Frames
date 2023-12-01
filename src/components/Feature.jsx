import React from 'react'

const Feature = () => {
  return (
    <section className="container mx-auto px-6 sm:px-12 lg:px-24 py-12">
      <div className='flex justify-center'>
        <button className="bg-gray-200 text-black text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-2 rounded-2xl">
          Our main features 🦸🏼
        </button>
      </div>
      <div className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold my-6'>
        <h1>Discover your new superpowers</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <button className="text-xs sm:text-sm lg:text-base font-semibold text-blue-600 bg-blue-100 rounded-full px-4 py-1">
            Seamless Scheduling
          </button>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mt-6 mb-4">
            Focus on what matters most for you
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8">
            Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
          </p>
        </div>
        <div className="lg:w-1/2 max-w-lg lg:max-w-xl mx-auto">
          <div className="border border-dashed border-gray-300 rounded-lg p-6">
            {/* Calendar or image placeholder */}
            <div className="text-center">
              {/* Replace with actual calendar or image component */}
              <img src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature;
