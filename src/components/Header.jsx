import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Home, UserPlus, Info, ShoppingCart, User } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartItems, toggleCart, gifts, addToCart }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false); // Track if search has been submitted
  const navigate = useNavigate();
  const searchRef = useRef(null); // Create a reference for the search bar

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = gifts.filter(gift =>
      gift.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGifts(filtered);
    setSearchSubmitted(true); // Mark the search as submitted
    setQuery(''); // Clear the search query
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisible(false); // Close search if clicked outside
      setFilteredGifts([]); // Clear filtered gifts when closing the search
      setSearchSubmitted(false); // Reset search submitted state
    }
  };

  // Effect to handle click outside of the search bar
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
