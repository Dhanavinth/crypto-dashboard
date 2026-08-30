import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

function CoinDetails() {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);

  useEffect(() => {
    api
      .get(`/ticker/?id=${id}`)
      .then((response) => {
        setCoin(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!coin) {
    return <div className="loading">Loading coin details...</div>;
  }

  return (
    <div className="dashboard">

      <Link to="/">
        ← Back to Market
      </Link>

      <div className="details-card">

        <h1>{coin.name}</h1>

        <p className="coin-symbol">
          {coin.symbol}
        </p>

        <h2>
          ${Number(coin.price_usd).toLocaleString()}
        </h2>

        <div className="details-grid">

          <div>
            <strong>Market Rank</strong>
            <p>#{coin.rank}</p>
          </div>

          <div>
            <strong>Market Cap</strong>
            <p>
              ${Number(coin.market_cap_usd).toLocaleString()}
            </p>
          </div>

          <div>
            <strong>24h Volume</strong>
            <p>
              ${Number(coin.volume24).toLocaleString()}
            </p>
          </div>

          <div>
            <strong>24h Change</strong>
            <p>
              {coin.percent_change_24h}%
            </p>
          </div>

          <div>
            <strong>7d Change</strong>
            <p>
              {coin.percent_change_7d}%
            </p>
          </div>

          <div>
            <strong>Circulating Supply</strong>
            <p>
              {Number(coin.csupply).toLocaleString()}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CoinDetails;