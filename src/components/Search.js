import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Search.css";
import { useNavigate } from "react-router-dom";

const Search = ({ setFavorites }) => {
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [favorites, setLocalFavorites] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("Select Breed");
  const [backgroundImage, setBackgroundImage] = useState(
    "https://wallpapercave.com/wp/wp14388034.jpg"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of breeds
    axios
      .get("https://frontend-take-home-service.fetch.com/dogs/breeds", {
        withCredentials: true,
      })
      .then((response) => setBreeds(["Select Breed", "All", ...response.data]))
      .catch((error) => console.error("Error fetching breeds", error));
  }, []);

  const fetchDogs = async () => {
    if (selectedBreed === "Select Breed") {
      setDogs([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let dogIds = [];

      if (selectedBreed === "All") {
        const breedFetches = breeds.slice(2).map((breed) =>
          axios
            .get(
              `https://frontend-take-home-service.fetch.com/dogs/search?breeds=${breed}`,
              { withCredentials: true }
            )
            .then((response) => response.data.resultIds)
            .catch((error) => {
              console.error(`Error fetching breed ${breed}:`, error);
              return []; // Return an empty array for failed fetches
            })
        );

        const allBreedResults = await Promise.all(breedFetches);
        dogIds = allBreedResults.flat();
      } else {
        const response = await axios.get(
          `https://frontend-take-home-service.fetch.com/dogs/search?breeds=${selectedBreed}`,
          { withCredentials: true }
        );
        dogIds = response.data.resultIds;
      }

      if (dogIds.length === 0) {
        setDogs([]);
        setError("No dogs found for the selected breed.");
        setLoading(false);
        return;
      }

      const chunkSize = 20;
      let allDogDetails = [];
      for (let i = 0; i < dogIds.length; i += chunkSize) {
        const chunk = dogIds.slice(i, i + chunkSize);
        try {
          const response = await axios.post(
            "https://frontend-take-home-service.fetch.com/dogs",
            chunk,
            { withCredentials: true }
          );
          allDogDetails = [...allDogDetails, ...response.data];
        } catch (error) {
          console.error("Error fetching dog details:", error);
        }
      }

      const sortedDogs = [...allDogDetails].sort((a, b) => {
        const breedA = a.breed.toLowerCase();
        const breedB = b.breed.toLowerCase();
        return sortOrder === "asc"
          ? breedA.localeCompare(breedB)
          : breedB.localeCompare(a.breed);
      });

      setDogs(sortedDogs);
      setCurrentPage(1); // Reset pagination to the first page
    } catch (error) {
      setError("Failed to fetch dogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (dog) => {
    const isFavorite = favorites.some((fav) => fav.id === dog.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== dog.id);
      setLocalFavorites(updatedFavorites);
      if (typeof setFavorites === "function") {
        setFavorites(updatedFavorites);
      }
    } else {
      const updatedFavorites = [...favorites, dog];
      setLocalFavorites(updatedFavorites);
      if (typeof setFavorites === "function") {
        setFavorites(updatedFavorites);
      }
    }
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    setDogs((prevDogs) =>
      [...prevDogs].sort((a, b) => {
        const breedA = a.breed.toLowerCase();
        const breedB = b.breed.toLowerCase();
        return sortOrder === "asc"
          ? breedA.localeCompare(breedB)
          : breedB.localeCompare(a.breed);
      })
    );
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(dogs.length / itemsPerPage);
    const visiblePages = 3;

    const startPage = Math.max(
      1,
      Math.min(currentPage - Math.floor(visiblePages / 2), totalPages - visiblePages + 1)
    );
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-button ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination">
        {startPage > 1 && (
          <>
            <button onClick={() => handlePageChange(1)} className="pagination-button">
              &lt;
            </button>
            <span>...</span>
          </>
        )}
        {pages}
        {endPage < totalPages && (
          <>
            <span>...</span>
            <button onClick={() => handlePageChange(totalPages)} className="pagination-button">
              &gt;
            </button>
          </>
        )}
      </div>
    );
  };

  const paginatedDogs = dogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    fetchDogs();
  }, [selectedBreed, sortOrder]);

  return (
    <div
      className="search-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" id="menu-label" className="menu-button">
        ☰
      </label>
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
          <div className="search-controls">
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="search-dropdown"
            >
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <button onClick={fetchDogs} className="search-button">
              Search
            </button>
            <button onClick={toggleSortOrder} className="sort-button">
              Sort: {sortOrder === "asc" ? "↓" : "↑"}
            </button>
          </div>
          {loading && <p className="loading-text">Loading dogs...</p>}
          {error && <p className="error-text">{error}</p>}
          <div className="dog-list">
            {paginatedDogs.map((dog) => (
              <div key={dog.id} className="dog-card">
                <img src={dog.img} alt={dog.name} className="dog-img" />
                <div className="dog-details">
                  <p className="dog-name">Name: {dog.name}</p>
                  <p className="dog-breed">Breed: {dog.breed}</p>
                  <p className="dog-age">Age: {dog.age}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(dog)}
                  className={`favorite-button ${
                    favorites.some((fav) => fav.id === dog.id) ? "unfavorite" : ""
                  }`}
                >
                  {favorites.some((fav) => fav.id === dog.id)
                    ? "Unfavorite"
                    : "Favorite"}
                </button>
              </div>
            ))}
          </div>
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default Search;
