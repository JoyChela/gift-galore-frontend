// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GiftCard from './components/GiftCard';
import Cart from './components/Cart';
import CheckoutAndPayment from './components/CheckoutAndPayment'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [giftCards, setGiftCards] = useState([]); // To store fetched gift cards
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (gift) => {
    setCartItems([...cartItems, gift]);
    toast.success(`${gift.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const removeFromCart = (gift) => {
    setCartItems(cartItems.filter(item => item !== gift));
    toast.info(`${gift.name} removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Fetch gift cards in App component and pass them to other components
  useEffect(() => {
    const fetchGiftCards = async () => {
      try {
        const response = await fetch('https://backend-m0t6.onrender.com/gifts');
        const data = await response.json();
        setGiftCards(data); // Store gift cards globally
      } catch (error) {
        console.error('Error fetching gift cards:', error);
      }
    };
    fetchGiftCards();
  }, []);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header 
          cartItems={cartItems} 
          toggleCart={toggleCart} 
          gifts={giftCards} // Pass giftCards to Header for search
          addToCart={addToCart} // Pass addToCart for search result add
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/gift-card" 
              element={<GiftCard addToCart={addToCart} giftCards={giftCards} />} 
            />
            <Route path="/checkout" element={<CheckoutAndPayment cartItems={cartItems} />} />
          </Routes>
        </main>
        <Footer />
        <Cart 
          items={cartItems} 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          removeFromCart={removeFromCart} 
        />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
