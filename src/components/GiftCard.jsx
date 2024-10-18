import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const GiftCard = ({ addToCart }) => {
  const [giftCards, setGiftCards] = useState([]);
  const [occasions, setOccasions] = useState([]);
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOccasions = async () => {
      try {
        const response = await fetch('https://backend-m0t6.onrender.com/occasions');
        if (!response.ok) {
          throw new Error('Failed to fetch occasions');
        }
        const data = await response.json();
        setOccasions(data);
      } catch (error) {
        setError(error.message);
      }
    };