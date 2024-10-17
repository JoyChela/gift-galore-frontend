import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [cartItems] = useState([
    { id: 1, name: "Birthday Cake Candles", price: 5.99, quantity: 2 },
    { id: 2, name: "Handmade Scarf", price: 24.99, quantity: 1 },
  ]);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="flex justify-between mb-8">
        <div className={`w-1/3 text-center ${step >= 1 ? "text-blue-500" : "text-gray-400"}`}>Cart</div>
        <div className={`w-1/3 text-center ${step >= 2 ? "text-blue-500" : "text-gray-400"}`}>Shipping</div>
        <div className={`w-1/3 text-center ${step >= 3 ? "text-blue-500" : "text-gray-400"}`}>Confirmation</div>
      </div>

      {step === 1 && (
        <div className="cart-review">
          <h2 className="text-xl font-semibold mb-4">View Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
          ))}
          <div className="text-right font-semibold mt-4">Total: ${calculateTotal()}</div>
          <button onClick={() => setStep(2)} className="bg-blue-500 text-white py-2 px-4 mt-6 rounded hover:bg-blue-600">
            Proceed to Shipping
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="shipping-form">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={shippingInfo.zipCode}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Confirm Order
          </button>
        </form>
      )}

      {step === 3 && (
        <div className="confirmation text-center">
          <h2 className="text-xl font-semibold mb-4">Order Confirmed!</h2>
          <p>Thank you for your purchase. Your gifts will be shipped to:</p>
          <address className="mt-4 mb-4">
            {shippingInfo.name}
            <br />
            {shippingInfo.address}
            <br />
            {shippingInfo.city}, {shippingInfo.zipCode}
            <br />
            {shippingInfo.country}
          </address>
          <p className="font-semibold">Total paid: ${calculateTotal()}</p>
          <button onClick={() => navigate("/payment")} className="bg-green-500 text-white py-2 px-4 mt-6 rounded hover:bg-green-600">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
