import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Match.css";

const Match = ({ favorites }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [matchedDog, setMatchedDog] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const collapseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (favorites.length > 0) {
      const favoriteIds = favorites.map((dog) => dog.id);
      axios
        .post("https://frontend-take-home-service.fetch.com/dogs/match", favoriteIds, {
          withCredentials: true,
        })
        .then((response) => {
          const matchedId = response.data.match;
          const matchedDog = favorites.find((dog) => dog.id === matchedId);
          setMatchedDog(matchedDog);
        })
        .catch((error) => console.error("Error finding match", error));
    }
  }, [favorites]);

  return (
    <div
      className="match-container"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp13446163.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseLeave={collapseMenu} // Collapse menu on hover out
    >
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="menu-button">
        ☰
      </label>
      <div
        className={`menu-overlay ${isMenuOpen ? "menu-overlay-show" : ""}`}
        onMouseLeave={collapseMenu} // Added to collapse menu on hover out
      ></div>
      <nav className={`navbar ${isMenuOpen ? "navbar-show" : ""}`} onMouseLeave={collapseMenu}>
        <div className="menu-dropdown">
          <button onClick={() => navigate("/search")}>Search</button>
          <button onClick={() => navigate("/favorites")}>Favorites</button>
          <button onClick={() => navigate("/match")}>Find Match</button>
          <button onClick={() => navigate("/")}>Logout</button>
        </div>
      </nav>
      <div className="match-content">
        <h2 className="match-title">Your Perfect Match</h2>
        {matchedDog ? (
          <div className="match-card">
            <img src={matchedDog.img} alt={matchedDog.name} className="match-img" />
            <p>Name: {matchedDog.name}</p>
            <p>Breed: {matchedDog.breed}</p>
            <p>Age: {matchedDog.age}</p>
            <p>Location: {matchedDog.zip_code}</p>
          </div>
        ) : (
          <p className="match-empty">No match found yet. Add dogs to your favorites!</p>
        )}
      </div>
    </div>
  );
};

export default Match;
