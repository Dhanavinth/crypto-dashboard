import { Link } from "react-router-dom";

function CoinCard({ coin, isFavorite, toggleFavorite }) {
  const handleFavoriteClick = () => {
    toggleFavorite(coin);
  };

  const priceChange = Number(coin.percent_change_24h);

  return (
    <div className="coin-card">

      <button
        className={`favorite-button ${isFavorite ? "active" : ""}`}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? "★" : "☆"}
      </button>

      <Link
        to={`/coin/${coin.id}`}
        className="coin-link"
      >
        <div className="coin-header">
          <div>
            <div className="coin-name">
              {coin.name}
            </div>

            <div className="coin-symbol">
              {coin.symbol}
            </div>
          </div>

          <div className="coin-rank">
            #{coin.rank}
          </div>
        </div>

        <div className="coin-price">
          ${Number(coin.price_usd).toLocaleString()}
        </div>

        <div
          className={`price-change ${
            priceChange >= 0 ? "positive" : "negative"
          }`}
        >
          {priceChange >= 0 ? "▲" : "▼"}{" "}
          {Math.abs(priceChange).toFixed(2)}%
          <span> 24h</span>
        </div>
      </Link>

    </div>
  );
}

export default CoinCard;