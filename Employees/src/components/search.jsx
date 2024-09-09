import React, { useState, useEffect } from 'react';

function SearchHistory() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [items] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']); // Example items
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(savedHistory);
  }, []);

  useEffect(() => {
    if (input) {
      setFilteredItems(items.filter(item => item.toLowerCase().includes(input.toLowerCase())));
    } else {
      setFilteredItems([]);
    }
  }, [input, items]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const saveToStorage = () => {
    const newHistory = [...history, input];
    setHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    setInput('');
  };

  return (
    <>
      <div className='searchdiv'>
        <input
          className='search'
          placeholder="Search"
          type="search"
          value={input}
          onChange={handleInputChange}
        />
        <button 
          className='searching'
          onClick={saveToStorage}>
          <span className="material-symbols-light--search">search</span>
        </button>
        <div>
          {filteredItems.length > 0 && (
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchHistory;
