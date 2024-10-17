import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ items, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-64 h-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;