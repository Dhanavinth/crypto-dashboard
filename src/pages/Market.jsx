import { useState, useEffect } from "react";
import api from "../services/api";
import CoinCard from "../components/CoinCard";

function Market({ favorites, toggleFavorite }) {

  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    api
      .get("/tickers/")
      .then((response) => {
        setCoins(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="dashboard">

      <h1 className="page-title">
  Crypto Market
</h1>

<p className="page-description">
  Track live cryptocurrency prices, rankings and market movements.
</p>

      <input
        className="search-box"
        type="text"
        placeholder="Search cryptocurrency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="coin-grid">

        {filteredCoins.slice(0, 20).map((coin) => (

          <CoinCard
            key={coin.id}
            coin={coin}
            isFavorite={favorites.some(
              (favorite) => favorite.id == coin.id
            )}
            toggleFavorite={toggleFavorite}
          />

        ))}

      </div>

    </div>

  );
}

export default Market;