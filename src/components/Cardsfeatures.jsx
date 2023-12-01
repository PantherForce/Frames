// FeaturesGrid.js
import React from 'react';

const features = [
    {
        title: 'Cross-Device Sync',
        description: 'Keep your schedule in sync across all  your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.',
        imageAlt: 'Calendar for January 2023',
        imageSrc: 'https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg',

    },
    {
        title: 'Auto Event Import',
        description: 'Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.',
        imageAlt: 'Calendar with events',
        imageSrc: 'https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg',


    },
    {
        title: 'Task Delegation',
        description: 'Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.',
        imageAlt: 'Task calendar',
        imageSrc: 'https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg',

    },
];

const FeatureCard = ({ title, description, imageSrc, imageAlt }) => (
    <div className="flex flex-col items-center p-4">
        <div className="bg-white p-4 rounded-lg mb-4">
            <div className="w-64 bg-gray-100 h-48 flex items-center justify-center">
                <img src={imageSrc} alt={imageAlt} className="max-h-40" />
            </div>
        </div>
        <h3 className="bg-yellow-200 px-4 py-1 text-sm rounded-2xl font-semibold text-black mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center text-xs line-clamp-3">{description}</p>
    </div>
);

const Cardsfeatures = () => {
    return (
        <div className="container mx-auto p-4 md:p-16">
            <div className='flex justify-center'>
                <button className="bg-gray-200 text-black m-4 px-6 py-2 rounded-2xl">And so much more... 💼</button>
            </div>
            <div className='text-center text-7xl font-bold mb-8'>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6">Our features to make your life easier</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Cardsfeatures;
