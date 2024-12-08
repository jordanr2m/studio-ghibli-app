import FilmCard from "./FilmCard"

const Films = ({ movies }) => {
  return (
    <section className="all-films">
      <div className="wrapper films">
        <div className="search-nav">
          <h2>Search films below</h2>
          {/* TO DO: Add search bar and filter options Here */}
        </div>

        {movies.map(movie => (
          <FilmCard 
            key={movie.id}
            movie={movie}
            // TO DO: add functions for adding to favorites, favorites, and removing from favorites
          />
        ))}
      </div>
    </section>
  )
}

export default Films
