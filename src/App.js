import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Match from "./components/Match";
import "./styles.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search setFavorites={setFavorites} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/match" element={<Match favorites={favorites} />} />
      </Routes>
    </Router>
  );
};

export default App;
