import React, { useState } from 'react';

const Search = ({ gifts, onSearchResult }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const filteredGifts = gifts.filter(gift =>
      gift.name.toLowerCase().includes(query.toLowerCase())
    );
    onSearchResult(filteredGifts); // Send the filtered results back to the parent component
  };

  
  export default Search;