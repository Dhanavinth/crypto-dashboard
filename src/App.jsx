import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import Market from "./pages/Market";
import CoinDetails from "./pages/CoinDetails";
import Converter from "./pages/Converter";
import Favorites from "./pages/Favorites";

function App() {

const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");

  return savedFavorites ? JSON.parse(savedFavorites) : [];
});
useEffect(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}, [favorites]);

  const toggleFavorite = (coin) => {

    setFavorites((currentFavorites) => {

      const alreadyFavorite = currentFavorites.some(
        (favorite) => favorite.id === coin.id
      );

      if (alreadyFavorite) {

        return currentFavorites.filter(
          (favorite) => favorite.id !== coin.id
        );

      }

      return [...currentFavorites, coin];

    });

  };

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Market
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/coin/:id"
          element={<CoinDetails />}
        />

        <Route
          path="/converter"
          element={<Converter />}
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

      </Routes>

    </>
  );
}

export default App;