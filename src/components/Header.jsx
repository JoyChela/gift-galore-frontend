import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartItems, toggleCart }) => {
  return (
    <header className="bg-cyan-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-red-600">Gift Galore 🎁</Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-lg hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-red-500">About Us</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-1">
          <button 
            className="bg-white p-2 rounded flex items-center" 
            onClick={toggleCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-black" />
            <span className="ml-1 text-black">{cartItems.length}</span>
          </button>
          <Link to="/signup" className="flex items-center bg-white p-2 rounded">
            <FontAwesomeIcon icon={faUser} className="text-black" />
            <span className="ml-1 text-black">Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;