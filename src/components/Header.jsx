import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Home, UserPlus, Info, ShoppingCart, User } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartItems, toggleCart, gifts, addToCart }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false); // Track if search has been submitted
  const navigate = useNavigate();
  const searchRef = useRef(null); // Create a reference for the search bar

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = gifts.filter((gift) =>
      gift.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGifts(filtered);
    setSearchSubmitted(true); // Mark the search as submitted
    setQuery(""); // Clear the search query
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-cyan-600 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with gift icon */}
        <div
          className="text-3xl font-bold text-red-600 flex items-center cursor-pointer"
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          aria-label="Go to home"
        >
          Gift Galore <span className="text-2xl">🎁</span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="flex items-center text-lg hover:text-red-500"
              >
                <Home size={20} className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center text-lg hover:text-red-500"
              >
                <Info size={20} className="mr-1" /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center text-lg hover:text-red-500"
              >
                <UserPlus size={20} className="mr-1" /> Sign Up
              </Link>
            </li>
            {/* Search Bar Toggle */}
            {searchVisible ? (
              <form
                onSubmit={handleSearch}
                className="flex items-center space-x-2"
                ref={searchRef}
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="p-2 rounded border border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setSearchVisible(false)}
                  className="text-white"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Search
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchVisible(true)}
                className="navbar-item"
                aria-label="Open search"
              >
                <Search size={20} />
              </button>
            )}
          </ul>
        </nav>

        {/* Cart and Profile Section */}
        <div className="flex items-center space-x-4">
          <button
            className="bg-white p-2 rounded flex items-center space-x-1"
            onClick={toggleCart}
            aria-label="Toggle Cart"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-black" />
            <span className="text-black">{cartItems.length}</span>
          </button>
          <span className="text-black">Cart</span>
          <Link
            to="/profile"
            className="flex items-center bg-white p-2 rounded"
          >
            <User size={20} className="text-black" />
            <span className="ml-1 text-black">Profile</span>
          </Link>
        </div>
      </div>

      {/* Search Results Display */}
      {searchVisible && (
        <div className="absolute z-10 bg-white shadow-lg mt-2 p-4 rounded-md w-full">
          <h2 className="text-lg font-semibold">Search Results:</h2>
          <ul className="space-y-2">
            {searchSubmitted && filteredGifts.length > 0 // Check if search has been submitted and gifts are found
              ? filteredGifts.map((gift, index) => (
                  <li key={index} className="border-b pb-2">
                    <h3 className="text-md font-medium">{gift.name}</h3>
                    <p>{gift.description}</p>
                    <p className="text-lg font-bold">${gift.price}</p>
                    <button
                      onClick={() => addToCart(gift)} // Add gift to cart when clicked
                      className="bg-blue-500 text-white p-1 rounded"
                    >
                      Add to Cart
                    </button>
                  </li>
                ))
              : searchSubmitted && ( // Only show this message if a search was submitted
                  <li className="text-red-500">No gifts found</li> // Display message when no gifts found
                )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
