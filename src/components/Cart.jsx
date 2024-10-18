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
          <></>