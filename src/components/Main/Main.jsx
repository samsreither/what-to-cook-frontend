import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const [searchInput, setSearchInput] = useState(''); // State for the search bar
  const navigate = useNavigate();

  // function to handle submission in search bar
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/recipes?ingredients=${encodeURIComponent(searchInput)}`);
      // redirects to /recipes with user input as parameter
    }
  };

  return (
    <main className="main">
      {/* Text box */}
      <section className="main__info">
        <h2 className="main__title">Are you hungry?</h2>
        <p className="main__description">
          Tell us what ingredients you have, and we’ll give you some dishes you can make!
        </p>
      </section>

      {/* Search bar */}
      <form className="main__search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="main__search-input"
          placeholder="Enter ingredients (e.g., eggs, flour, milk)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} //updates input state
        />
        <button type="submit" className="main__search-button">Search</button>
      </form>
    </main>
  );
}

export default Main;