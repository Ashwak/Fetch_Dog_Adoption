/* File: components/Search.js */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Search.css";
import { useNavigate } from "react-router-dom";

const Search = ({ setFavorites }) => {
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("https://source.unsplash.com/1600x900/?puppy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://frontend-take-home-service.fetch.com/dogs/breeds", {
        withCredentials: true,
      })
      .then((response) => setBreeds(response.data))
      .catch((error) => console.error("Error fetching breeds", error));
  }, []);

  const fetchDogs = () => {
    setLoading(true);
    setError(null);
    axios
      .get(
        `https://frontend-take-home-service.fetch.com/dogs/search?breeds=${selectedBreed}`,
        { withCredentials: true }
      )
      .then(async (response) => {
        const dogIds = response.data.resultIds;
        const dogDetails = await axios.post(
          "https://frontend-take-home-service.fetch.com/dogs",
          dogIds,
          { withCredentials: true }
        );
        setDogs(dogDetails.data);
        setBackgroundImage(`https://source.unsplash.com/1600x900/?${selectedBreed || 'dog'}`);
      })
      .catch((error) => setError("Failed to fetch dogs. Please try again."))
      .finally(() => setLoading(false));
  };

  const addFavorite = (dog) => {
    if (typeof setFavorites === "function") {
      setFavorites((prevFavorites) => [...prevFavorites, dog]);
    } else {
      console.error("setFavorites is not a function");
    }
  };

  const toggleMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
      menuToggle.checked = !menuToggle.checked;
    }
  };

  const collapseMenu = (e) => {
    const menuToggle = document.getElementById("menu-toggle");
    if (
      menuToggle &&
      menuToggle.checked &&
      e.target.id !== "menu-toggle" &&
      e.target.id !== "menu-label" &&
      !e.target.closest(".navbar")
    ) {
      menuToggle.checked = false;
    }
  };

  return (
    <div
      className="search-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={collapseMenu}
    >
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" id="menu-label" className="menu-button">
        ☰
      </label>
      <div className="menu-overlay" onClick={collapseMenu}></div>
      <nav className="navbar">
        <div className="menu-dropdown">
          <button onClick={() => navigate("/search")}>Search</button>
          <button onClick={() => navigate("/favorites")}>Favorites</button>
          <button onClick={() => navigate("/match")}>Find Match</button>
          <button onClick={() => navigate("/")}>Logout</button>
        </div>
      </nav>
      <div className="overlay">
        <div className="welcome-message">
          <h2>Welcome to the Dog Adoption Platform!</h2>
          <p>Find your perfect companion today.</p>
        </div>
        <div className="search-content">
          <h2 className="search-title">Search Dogs</h2>
          <p className="search-instructions">Choose a breed to find your next furry friend!</p>
          <div className="search-controls">
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="search-dropdown"
            >
              <option value="">Select Breed</option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <button onClick={fetchDogs} className="search-button">
              Search
            </button>
          </div>
          {loading && <p className="loading-text">Loading dogs...</p>}
          {error && <p className="error-text">{error}</p>}
          <div className="dog-list">
            {dogs.map((dog) => (
              <div key={dog.id} className="dog-card">
                <img src={dog.img} alt={dog.name} className="dog-img" />
                <div className="dog-details">
                  <p className="dog-name">Name: {dog.name}</p>
                  <p className="dog-breed">Breed: {dog.breed}</p>
                  <p className="dog-age">Age: {dog.age}</p>
                </div>
                <button
                  onClick={() => addFavorite(dog)}
                  className="favorite-button"
                >
                  Favorite
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

