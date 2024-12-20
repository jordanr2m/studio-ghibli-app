import WatchlistCard from "./WatchlistCard";


const Watchlist = ({ filmsToWatch, maxWatchlist, removeFromWatchlist }) => {
  const remainingWatchlist = maxWatchlist - filmsToWatch.length;

  return (
    <section className="watchlist-films">
      <div className="watchlist-wrapper wrapper">
        <h2>Top 3 films to watch next</h2>
        <ul>
          {filmsToWatch.map((movie, index) => (
            <WatchlistCard
              movie={movie}
              key={movie.id}
              removeFromWatchlist={removeFromWatchlist}
              listPosition={index + 1}
            />
          ))}
        </ul>

        {filmsToWatch.length < maxWatchlist && (
          <div className="watchlist-description">
            <p>
              You can add up to {remainingWatchlist} more {remainingWatchlist === 1 ? "film" : "films"} to your watchlist.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Watchlist
