

const FilmCard = ({ movie }) => {

    const convertRuntime = (minutes) => {
        let hours = Math.floor(minutes / 60);
        let remainingMinutes = minutes % 60;
        // remainingMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
        return `${hours} ${hours > 1 ? "hours" : "hour"} ${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"}`
        // return `${hours}:${remainingMinutes}`
    }

    return (
        <article className="film-card">
            <div className="film-card-content">
                <div className="film-img">
                    <img src={movie.image} alt="Poster for the film" />
                </div>
                <div className="film-info">
                    <h3>{movie.title} <span>({movie.release_date})</span></h3>
                    <p>Directed by: {movie.director}</p>
                    <p>Runtime: {convertRuntime(movie.running_time)}</p>
                </div>
            </div>
        </article>
    )
}

export default FilmCard
