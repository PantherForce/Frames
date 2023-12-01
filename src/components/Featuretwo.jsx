import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Featuretwo = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS
      }, []);

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-12">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <button className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 rounded-full px-4 py-1">
          Smart Reminders & Task
          </button>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-4">
          Never miss an important deadline or event again
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
          </p>
          <div className="flex justify-center mt-8">
    <div className='w-full sm:w-2/3 lg:w-80 h-26 text-center bg-black p-4 rounded-2xl'>
        <blockquote className="italic text-white text-xs sm:text-sm lg:text-base">
            "I never missed a call again, the AI-driven feature is a game changer for me!"
        </blockquote>
        <div className="flex items-center justify-center mt-4">
            <img src="data:image/jpeg;base64,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" alt="Avatar" className="w-6 h-6 mr-2 rounded-full" /> {/* Avatar Image */}
            <p className="text-xs sm:text-sm text-white">Adam, Solo founder</p>
        </div>
    </div>
</div>

        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-start mt-6 lg:mt-0">
          {/* Placeholder for the image or calendar component */}
          <div className="w-full max-w-md h-64 rounded-lg flex items-center justify-center overflow-hidden" data-aos="fade-down">
            {/* Replace this with your actual content */}
            <img src="https://framerusercontent.com/images/EgCwW6bpD4t2JQoyjgySRkUXc.png" alt="Calendar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featuretwo;
