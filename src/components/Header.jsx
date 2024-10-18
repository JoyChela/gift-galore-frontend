import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Home, UserPlus, Info, ShoppingCart, User } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartItems, toggleCart, gifts, addToCart }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredGifts, setFilteredGifts] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = gifts.filter((gift) =>
      gift.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGifts(filtered);
    setSearchSubmitted(true);
    setQuery("");
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisible(false);
      setFilteredGifts([]);
      setSearchSubmitted(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-cyan-600 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
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

        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="flex items-center text-xl hover:text-red-500"
              >
                <Home size={24} className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center text-xl hover:text-red-500"
              >
                <Info size={24} className="mr-2" /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center text-xl hover:text-red-500"
              >
                <UserPlus size={24} className="mr-2" /> Sign Up
              </Link>
            </li>
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
                  className="p-2 rounded border border-gray-300 text-lg"
                />
                <button
                  type="button"
                  onClick={() => setSearchVisible(false)}
                  className="text-white text-lg"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded text-lg"
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
                <Search size={24} />
              </button>
            )}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="bg-white p-2 rounded flex items-center space-x-1"
            onClick={toggleCart}
            aria-label="Toggle Cart"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-black text-xl" />
            <span className="text-black text-xl">{cartItems.length}</span>
          </button>
          <span className="text-black text-xl">Cart</span>
          <Link
            to="/profile"
            className="flex items-center bg-white p-2 rounded"
          >
            <User size={24} className="text-black" />
            <span className="ml-1 text-black text-xl">Profile</span>
          </Link>
        </div>
      </div>

      {searchVisible && (
        <div className="absolute z-10 bg-white shadow-lg mt-2 p-4 rounded-md w-full">
          <h2 className="text-xl font-semibold">Search Results:</h2>
          <ul className="space-y-2">
            {searchSubmitted && filteredGifts.length > 0
              ? filteredGifts.map((gift, index) => (
                  <li key={index} className="border-b pb-2">
                    <h3 className="text-lg font-medium">{gift.name}</h3>
                    <p className="text-base">{gift.description}</p>
                    <p className="text-xl font-bold">${gift.price}</p>
                    <button
                      onClick={() => addToCart(gift)}
                      className="bg-blue-500 text-white p-2 rounded text-lg"
                    >
                      Add to Cart
                    </button>
                  </li>
                ))
              : searchSubmitted && (
                  <li className="text-red-500 text-lg">No gifts found</li>
                )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;