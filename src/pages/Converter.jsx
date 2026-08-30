import { useEffect, useState } from "react";
import api from "../services/api";

function Converter() {

  const [coins, setCoins] = useState([]);

  const [amount, setAmount] = useState(1);

  const [fromCoin, setFromCoin] = useState("bitcoin");

  const [toCurrency, setToCurrency] = useState("usd");

  const [result, setResult] = useState(null);

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

  const convertCurrency = () => {

    const selectedCoin = coins.find(
      (coin) =>
        coin.name.toLowerCase() === fromCoin.toLowerCase()
    );

    if (!selectedCoin) {
      return;
    }

    const price = Number(selectedCoin.price_usd);

    const convertedAmount = Number(amount) * price;

    setResult(convertedAmount);

  };

  return (

    <div className="dashboard">

      <h1 className="page-title">
        Currency Converter
      </h1>

      <p className="page-description">
        Convert cryptocurrency to USD using live market prices
      </p>

      <div className="converter-card">

        <label>
          Amount
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>
          Cryptocurrency
        </label>

        <select
          value={fromCoin}
          onChange={(e) => setFromCoin(e.target.value)}
        >

          {coins.slice(0, 20).map((coin) => (

            <option
              key={coin.id}
              value={coin.name.toLowerCase()}
            >
              {coin.name} ({coin.symbol})
            </option>

          ))}

        </select>

        <label>
          Convert To
        </label>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >

          <option value="usd">
            USD
          </option>

        </select>

        <button
          className="convert-button"
          onClick={convertCurrency}
        >
          Convert
        </button>

        {result !== null && (

          <div className="conversion-result">

            {amount} {fromCoin.toUpperCase()}

            {" = "}

            ${Number(result).toLocaleString()}

          </div>

        )}

      </div>

    </div>

  );
}

export default Converter;