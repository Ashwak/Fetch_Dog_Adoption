import React from "react";
import { useNavigate } from "react-router-dom";
import "../Favorites.css";

const Favorites = ({ favorites }) => {
  const navigate = useNavigate();
  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Your Favorite Dogs</h2>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((dog) => (
            <div key={dog.id} className="favorites-card">
              <img src={dog.img} alt={dog.name} className="favorites-img" />
              <p>ID: {dog.id}</p>
              <p>Name: {dog.name}</p>
            </div>
          ))
        ) : (
          <p className="favorites-empty">No favorite dogs selected yet.</p>
        )}
      </div>
      <button onClick={() => navigate("/match")} className="favorites-button">Find Match</button>
    </div>
  );
};

export default Favorites;
