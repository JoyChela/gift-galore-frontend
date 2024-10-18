// src/components/Cart.js

import React from 'react';

const Cart = ({ items, isOpen, onClose, removeFromCart }) => {
  if (!isOpen) return null; // Don't render if the cart is closed

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-4">
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items mb-4">
              {items.map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-red-500 hover:underline ml-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="text-right font-semibold mt-4">
              Total: ${calculateTotal()}
            </div>
            <button
              onClick={onClose} // Close the cart
              className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            >
              Close
            </button>
            <button
              onClick={() => window.location.href='/checkout'} // Navigate to the checkout page
              className="w-full bg-green-500 text-white py-2 rounded mt-2"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
