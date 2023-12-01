import React from 'react';

const Banner = () => {

    const userAvatars = [
        'data:image/jpeg;base64,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', // Replace with actual paths
        'data:image/png;base64,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',
        'data:image/jpeg;base64,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', // Replace with actual paths
        'data:image/png;base64,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',

    ];

    const stars = Array(5).fill(
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.396-.956 1.607-.956 2.003 0l1.674 4.03c.164.395.547.668.974.668h4.253c1.057 0 1.493 1.286.72 1.934l-3.447 2.886c-.308.258-.439.673-.345 1.06l1.293 3.883c.219.656-.543 1.2-1.104.88l-3.515-1.986a1.09 1.09 0 00-1.077 0l-3.515 1.986c-.56.32-1.323-.224-1.104-.88l1.293-3.883a1.09 1.09 0 00-.345-1.06l-3.447-2.886c-.773-.648-.337-1.934.72-1.934h4.253c.427 0 .81-.273.974-.668l1.674-4.03z" />
        </svg>
    )


    return (
        <div className="text-center p-6 sm:p-12 lg:p-20 bg-gray-50">
            <p className="text-sm sm:text-base lg:text-lg">An other way to manage time️</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 my-6">
                Your new favorite <br></br> calendar app
            </h1>
            <div className="container mx-auto px-4">
            <p className="text-gray-500 text-base sm:text-lg lg:text-xl mb-8">
                Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
            </p>
        </div>
            <button className="bg-black text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-2xl">
                Get started, it's free
            </button>

            <div className="bg-white py-8">
                <div className="flex items-center justify-center space-x-2">
                    <div className="flex -space-x-4">
                        {userAvatars.map((avatar, index) => (
                            <img
                                key={index}
                                className="w-10 h-10 rounded-full border-2 border-white"
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col items-center py-8">
                        <div className="flex mb-2">
                            {stars}
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-xl font-semibold text-gray-800">5.0</span>
                            <span className="text-sm text-gray-600">From 200+ happy users</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;