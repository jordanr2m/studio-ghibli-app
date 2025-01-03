import WatchlistCard from "./WatchlistCard";

const Watchlist = ({ filmsToWatch, maxWatchlist, removeFromWatchlist, convertRuntime }) => {
  const remainingWatchlist = maxWatchlist - filmsToWatch.length;

  return (
    <section className="watchlist-films">
      <div className="watchlist-wrapper wrapper">
        <h2>Top 3 films to watch next:</h2>
        <ul>
          {filmsToWatch.map((movie, index) => (
            <WatchlistCard
              movie={movie}
              key={movie.id}
              removeFromWatchlist={removeFromWatchlist}
              listPosition={index + 1}
              convertRuntime={convertRuntime}
            />
          ))}
        </ul>

        {filmsToWatch.length < maxWatchlist && (
          <p className="watchlist-description">
            You can add {remainingWatchlist === 1 ? "" : "up to "} {remainingWatchlist} more {remainingWatchlist === 1 ? "film" : "films"} to your watchlist.
          </p>
        )}
      </div>
    </section>
  )
}

export default Watchlist
