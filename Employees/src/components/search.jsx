import React from 'react';

function SearchHistory({ input, onInputChange }) {
  return (
    <div className='searchdiv'>
      <input
        className='search'
        placeholder="Search by name"
        type="search"
        value={input}
        onChange={onInputChange}
      />
      <button className='searching'>
        <span className="material-symbols-light--search">search</span>
      </button>
    </div>
  );
}

export default SearchHistory;
