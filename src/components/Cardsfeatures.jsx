// FeaturesGrid.js
import React from 'react';

const features = [
  {
    title: 'Cross-Device Sync',
    description: 'Keep your schedule in sync across all  your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.',
    imageAlt: 'Calendar for January 2023',
    imageSrc : 'https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg',
    // imageSrc: 'path-to-your-january-calendar-image.png', // Uncomment and replace with actual path
  },
  {
    title: 'Auto Event Import',
    description: 'Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.',
    imageAlt: 'Calendar with events',
    imageSrc : 'https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg',

    // imageSrc: 'path-to-your-event-calendar-image.png', // Uncomment and replace with actual path
  },
  {
    title: 'Task Delegation',
    description: 'Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.',
    imageAlt: 'Task calendar',
    imageSrc : 'https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg',
    // imageSrc: 'path-to-your-task-calendar-image.png', // Uncomment and replace with actual path
  },
];

const FeatureCard = ({ title, description, imageSrc, imageAlt }) => (
  <div className="flex flex-col items-center p-4">
    <div className="bg-white p-4 rounded-lg mb-4">
      {/* Replace div with img tag and uncomment imageSrc when images are available */}
     
      <div className="w-60 h-40 flex items-center justify-center">
      { <img src={imageSrc} alt={imageAlt} className="max-h-40" /> }
      </div>
    </div>
    <h3 className="bg-yellow-200 px-4 py-1 text-sm rounded-2xl font-semibold text-black mb-2">{title}</h3>
    <p className="text-gray-600 text-center text-sm ">{description}</p>
  </div>
);

const Cardsfeatures = () => {
  return (
    <div className="container mx-auto p-16">
         <div className='flex justify-center '>
        <button className="bg-gray-200 text-black m-4  px-6 py-2 rounded-2xl">And so much more... 💼</button>
       </div>
        <div className='text-center text-4xl font-bold'>
            <h1>Discover your new superpowers</h1>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

    </div>
    
  );
};

export default Cardsfeatures;
