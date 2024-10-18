import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Gift Galore</h3>
            <p className="text-sm">Making gift-giving a joyful experience since 2020.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">Email: info@giftgalore.com</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm">Address: 123 Gift Street, Present City, GG 12345</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-cyan-300" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-cyan-300" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-cyan-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-cyan-300" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cyan-600 text-center text-sm">
          <p>&copy; 2024 Gift Galore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;