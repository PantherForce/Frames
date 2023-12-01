// components/Header.js
import React from 'react';

const Header = () => {

    return (
        <header className="bg-white px-6 py-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <div className="font-bold text-xl">Milton</div>
                <nav className="hidden md:flex space-x-10">
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">Features</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">Testimonial</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">Pricing</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">Faq's</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">Blog</a>

                </nav>
                <div>
                    <button className="text-gray-600 hover:text-gray-800 transition duration-300 mr-4">Log in</button>
                    <button className="bg-black text-white px-6 py-2 rounded-xl">Get started</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
