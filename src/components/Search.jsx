import React, { useState } from 'react';

const Search = ({ gifts, onSearchResult }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const filteredGifts = gifts.filter(gift =>
      gift.name.toLowerCase().includes(query.toLowerCase())
    );
    onSearchResult(filteredGifts); // Send the filtered results back to the parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search gifts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded ml-2">
        Search
      </button>
    </div>
  );
};

export default Search;
