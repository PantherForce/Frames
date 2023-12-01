// Footer.js
import React from 'react';

const Bottom = () => {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-8">
        <div>
          <h5 className="text-lg font-bold mb-2">Milton</h5>
          <p className="text-gray-600 text-sm mb-4">A short text explaining why my startup is so cool.</p>
          <p className="text-gray-600 text-sm">&copy; My super start-up</p>
          {/* Social icons */}
          <div className="flex space-x-2 mt-4">
            {/* Icons would go here */}
          </div>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">Products</h5>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>Features</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">Resources</h5>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>Change log</li>
            <li>Help center</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">Others</h5>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Affiliation</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">From the blog</h5>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</li>
            <br></br>
            <li>Organizing Your Calendar for Enhanced Productivity and Focus</li>
            
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-black text-white px-6 py-2 rounded-full">Buy this template for $49</button>
      </div>
    </footer>
  );
};

export default Bottom;
