import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Favorites.css";

const Favorites = ({ favorites }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const collapseMenu = () => setIsMenuOpen(false);

  return (
    <div
      className="favorites-container"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp14387812.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
        onClick={collapseMenu}
      ></div>
      <nav
        className={`navbar ${isMenuOpen ? "navbar-show" : ""}`}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={collapseMenu}
      >
        <div className="menu-dropdown">
          <button onClick={() => navigate("/search")}>Search</button>
          <button onClick={() => navigate("/favorites")}>Favorites</button>
          <button onClick={() => navigate("/match")}>Find Match</button>
          <button onClick={() => navigate("/")}>Logout</button>
        </div>
      </nav>
      <div className="favorites-content">
        <h2 className="favorites-title">Your Favorite Dogs</h2>
        <div className="favorites-list">
          {favorites && favorites.length > 0 ? (
            favorites.map((dog) => (
              <div key={dog.id} className="favorites-card">
                <img src={dog.img} alt={dog.name} className="favorites-img" />
                <p className="dog-name">Name: {dog.name}</p>
                <p className="dog-breed">Breed: {dog.breed}</p>
                <p className="dog-age">Age: {dog.age}</p>
              </div>
            ))
          ) : (
            <p className="favorites-empty">No favorite dogs selected yet.</p>
          )}
        </div>
        <div className="favorites-button-container">
          <button
            onClick={() => navigate("/match")}
            className="favorites-button"
          >
            Find Match
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
