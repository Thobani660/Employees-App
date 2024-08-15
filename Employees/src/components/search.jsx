import React, { useState, useEffect } from 'react';
// import Home from './components/Home';
function SearchHistory() {


  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(savedHistory);
  }, []);
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
                            defaultValue={"Search"} 
                            type="search" 
                            
                            value={input}
                            onChange={handleInputChange}
                    />
      <button 
            className='searching'
            onClick={saveToStorage}>
            <span className="material-symbols-light--search"></span>
      </button>
      <div>
       
      </div>
    </div>
    </>
  );


}
export default SearchHistory;