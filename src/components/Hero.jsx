import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <div className="bg-cyan-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0"> {/* Reduced width to 50% */}
          <img
            src="https://musicarts.wpenginepowered.com/wp-content/uploads/2018/11/kira-auf-der-heide-475623-unsplash-scaled.jpg"
            alt="Gift"
            className="w-full h-[calc(75vh)] object-cover rounded-lg shadow-lg" // Height is set to 75% of viewport height
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center"> {/* Adjusting text container width */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift Galore</h1>
          <p className="text-xl mb-2">Affordable gifts at the touch of a button</p>
          <p className="text-xl mb-4">Suitable gifts for various events</p>
          <p className="mb-6 text-sm md:text-base max-w-md">
            A free, private gift registry trusted by over two million
            members. You can get gifts right. Every time.™ Set it up
            once, use it for a lifetime.
          </p>
          <Link to="/gift-card"> {/* Corrected link to the gift card page */}
            <button className="bg-red-500 hover:bg-red-600 transition-colors text-white text-lg px-8 py-3 rounded-full self-start">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;