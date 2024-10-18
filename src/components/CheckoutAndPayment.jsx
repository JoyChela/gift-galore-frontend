import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CheckoutAndPayment = ({ cartItems }) => {
  const [step, setStep] = useState('checkout');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e) => {
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

    // Redirect to home after payment
    navigate('/'); // Navigate to the home page
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {step === 'checkout' ? 'Checkout' : 'Payment'}
      </h1>

      {step === 'checkout' ? (
        <form onSubmit={handleCheckoutSubmit}>
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
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 mb-2 w-full"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 mb-2 w-full"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={address.zip}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 mb-4 w-full"
            required
          />
          
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            Proceed to Payment
          </button>
        </form>
      ) : (
        <form onSubmit={handlePaymentSubmit}>
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <input
            type="text"
            name="cardName"
            placeholder="Name on Card"
            className="border border-gray-300 p-2 mb-2 w-full"
            required
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            className="border border-gray-300 p-2 mb-2 w-full"
            required
          />
          <div className="flex space-x-2">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              className="border border-gray-300 p-2 mb-2 w-1/2"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              className="border border-gray-300 p-2 mb-2 w-1/2"
              required
            />
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold">Shipping to:</h3>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.zip}</p>
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600 transition-colors">
            Pay
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutAndPayment;
