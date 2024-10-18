src/components/CheckoutAndPayment.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutAndPayment = ({ cartItems }) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    toast.success('Payment successful!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    navigate('/confirmation'); // Redirect to confirmation page
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout and Payment</h1>
      <div className="cart-summary mb-8">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between py-2 border-b">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="text-right font-semibold mt-4">Total: ${calculateTotal()}</div>
      </div>

      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={address.street}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 mb-2 w-full"
          required
        />