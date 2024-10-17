import React, { useState } from 'react';
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
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (gift) => {
    setCartItems([...cartItems, gift]);
    toast.success(`${gift.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header cartItems={cartItems} toggleCart={toggleCart} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gift-card" element={<GiftCard addToCart={addToCart} />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
        <Cart items={cartItems} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;