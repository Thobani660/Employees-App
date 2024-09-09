import React, { useState, useEffect } from 'react';

function SearchHistory() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('employeesData')) || [];
    setUsers(savedUsers);
  }, []);

  useEffect(() => {
    if (input) {
      setFilteredUsers(users.filter(user => 
        user.name.toLowerCase().includes(input.toLowerCase())
      ));
    } else {
      setFilteredUsers([]);
    }
  }, [input, users]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const saveToStorage = () => {
    // Example user data
    const newUser = { name: input };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('employeesData', JSON.stringify(updatedUsers));
    setInput('');
  };

  return (
    <>
      <div className='searchdiv'>
        <input
          className='search'
          placeholder="Search by name"
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
          {filteredUsers.length > 0 && (
            <ul>
              {filteredUsers.map((user, index) => (
                <li key={index}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchHistory;
