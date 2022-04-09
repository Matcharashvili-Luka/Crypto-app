import React from 'react';
import '../Style/SearchBar.css';

function SearchBar({ searchCoin, setSearchCoin }) {
  return (
    <div className='searchbar-container'>
        <input 
            type="text" 
            placeholder='Search Coin'
            onChange={(e) => {
              setSearchCoin(e.target.value);
            }}
            value={searchCoin}
        />
    </div>
  )
}

export default SearchBar