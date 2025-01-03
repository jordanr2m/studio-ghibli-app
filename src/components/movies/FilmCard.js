import { useState } from "react";
import { SiRottentomatoes } from "react-icons/si";
import { FaRegStar, FaStar } from "react-icons/fa";

const FilmCard = ({ movie, filmsToWatch, addToWatchlist, removeFromWatchlist, convertRuntime }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    // Disable watchlist button when flipped
    const [btnDisabled, setBtnDisabled] = useState(false);
    // Check if film is already in watchlist
    const alreadyWatchlisted = filmsToWatch.find(film => film.id === movie.id);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        setBtnDisabled(!btnDisabled);
    };

    const handleWatchlistAdd = (e, movie) => {
        e.stopPropagation(); // Prevents card from flipping
        addToWatchlist(movie.id);
    };

    const handleWatchlistRemove = (e, movie) => {
        e.stopPropagation();
        removeFromWatchlist(movie.id);
    };

    return (
        <article className={`film-card ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
        >
            {/* Front of the Card */}
            <div className="card-front">
                <div className="film-card-content">
                    <div className="film-front-container">
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
                    </div>


                    <footer>
                        <p className="add-watchlist">
                            {alreadyWatchlisted ? (
                                <button
                                    aria-label="Delete from your watchlist"
                                    onClick={(e) => handleWatchlistRemove(e, movie)}
                                    disabled={btnDisabled}
                                >
                                    <FaStar />
                                </button>
                            ) : (
                                <button
                                    aria-label="Add film to your watchlist"
                                    onClick={(e) => handleWatchlistAdd(e, movie)}
                                    disabled={btnDisabled}
                                >
                                    <FaRegStar />
                                </button>
                            )}
                        </p>
                    </footer>
                </div>
            </div>


            {/* Back of the Card */}
            <div className="card-back">
                <div className="back-card-content">
                    <div className="film-poster">
                        <img src={movie.movie_banner} alt="Banner for the film" />
                    </div>
                    <div className="film-description">
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default FilmCard
