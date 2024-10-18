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

    const fetchGiftCards = async () => {
      try {
        const response = await fetch('https://backend-m0t6.onrender.com/gifts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGiftCards(data);
        setFilteredGifts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOccasions();
    fetchGiftCards();
  }, []);

  const handleOccasionChange = (event) => {
    const occasion = event.target.value;
    setSelectedOccasion(occasion);

    if (occasion === '') {
      setFilteredGifts(giftCards);
    } else {
      const filtered = giftCards.filter((gift) => {
        const giftOccasion = gift.occasion ? (typeof gift.occasion === 'string' ? gift.occasion.toLowerCase() : gift.occasion.name.toLowerCase()) : '';
        return giftOccasion === occasion.toLowerCase();
      });
      setFilteredGifts(filtered);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="mb-6">
        <label htmlFor="occasion" className="block mb-2 text-lg font-semibold text-black">
          Filter by Occasion:
        </label>
        <select
          id="occasion"
          value={selectedOccasion}
          onChange={handleOccasionChange}
          className="block w-full p-2 border border-gray-300 rounded-lg text-black"
        >
          <option value="">All Occasions</option>
          {occasions.map((occasion) => (
            <option key={occasion.id} value={occasion.name}>
              {occasion.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGifts.length > 0 ? (
          filteredGifts.map((gift) => (
            <div key={gift.id} className="bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105">
              <img src={gift.image} alt={gift.name} className="w-full h-40 object-contain rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-black">{gift.name}</h3>
              <p className="text-black mb-2">{gift.description}</p>
              <p className="text-black mb-2">
                <strong>Occasion:</strong> {gift.occasion ? (typeof gift.occasion === 'string' ? gift.occasion : gift.occasion.name) : 'General'}
              </p>
              <p className="text-xl font-bold text-black">${gift.price}</p>
              <button
                onClick={() => addToCart(gift)}
                className="mt-2 bg-black text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No gifts found for this occasion</p>
        )}
      </div>
    </div>
  );
};

export default GiftCard;
