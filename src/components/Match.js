import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Match.css";

const Match = ({ favorites }) => {
  const [matchedDog, setMatchedDog] = useState(null);

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
    <div className="match-container">
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
  );
};

export default Match;