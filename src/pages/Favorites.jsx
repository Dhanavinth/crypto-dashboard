import CoinCard from "../components/CoinCard";

function Favorites({ favorites, toggleFavorite }) {

  return (

    <div className="dashboard">

      <h1 className="page-title">
        Favorite Coins
      </h1>

      <p className="page-description">
        Your saved cryptocurrencies
      </p>

      {favorites.length === 0 ? (

        <p>
          You haven't added any favorite coins yet.
        </p>

      ) : (

        <div className="coin-grid">

          {favorites.map((coin) => (

            <CoinCard
              key={coin.id}
              coin={coin}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />

          ))}

        </div>

      )}

    </div>

  );
}

export default Favorites;