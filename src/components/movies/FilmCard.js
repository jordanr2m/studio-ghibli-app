import { SiRottentomatoes } from "react-icons/si";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

const FilmCard = ({ movie }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const convertRuntime = (minutes) => {
        let hours = Math.floor(minutes / 60);
        let remainingMinutes = minutes % 60;
        // remainingMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
        hours = hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "";
        remainingMinutes = remainingMinutes > 0 ? `${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"}` : "";
        return `${hours} ${remainingMinutes}`;
    }

    // console.log(convertRuntime(12));

    return (
        <article className={`film-card ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
        >
            {/* Front of the Card */}
            <div className="card-front">
                <div className="film-card-content">
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

                    <footer>
                        <p className=" add-favorite">
                            <button
                                aria-label="Add to favorites"
                            // onClick={() => addToFavorites(quote.id)}
                            >
                                <FaRegStar />
                            </button>
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
