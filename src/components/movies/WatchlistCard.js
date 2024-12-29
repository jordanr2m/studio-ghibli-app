import { SiRottentomatoes } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const WatchlistCard = ({ movie, listPosition, removeFromWatchlist }) => {
  const convertRuntime = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    hours = hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "";
    remainingMinutes = remainingMinutes > 0 ? `${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"}` : "";
    return `${hours} ${remainingMinutes}`;
  }

  // console.log(movie)

  return (
    <li className="film-card" data-list-position={listPosition}>
      <button
        className="close-film"
        aria-label="Delete from watchlist"
        onClick={() => removeFromWatchlist(movie.id)}
      >
        <IoClose />
      </button>

      <div className="film-img">
        <img src={movie.image} alt="Poster for the film" />
      </div>
      <div className="film-info">
        <h3>{movie.title} <span>({movie.release_date})</span></h3>
        <p>Directed by: <b>{movie.director}</b></p>
        <p>Runtime: {convertRuntime(movie.running_time)}</p>
        <div className="rt-score">
          <SiRottentomatoes className="tomatoe-icon" />
          <p>{movie.rt_score}%</p>
        </div>
      </div>
    </li>
  )
}

export default WatchlistCard
