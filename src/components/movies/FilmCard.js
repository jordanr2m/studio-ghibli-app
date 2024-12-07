

const FilmCard = ({ movie }) => {
    return (
        <article className="film-card">
            <div className="film-card-content">
                <div className="film-img">
                    <img src={movie.image} alt="Poster for the film" />
                </div>
                <div className="film-info">
                    <h3>{movie.title} <span>({movie.release_date})</span></h3>
                    <p>Directed by: {movie.director}</p>
                </div>
            </div>
        </article>
    )
}

export default FilmCard
