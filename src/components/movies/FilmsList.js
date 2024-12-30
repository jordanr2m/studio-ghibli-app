import FilmCard from './FilmCard'

const FilmsList = ({ searchResults, filmsToWatch, addToWatchlist, removeFromWatchlist }) => {
  return (
    <>
      {searchResults.map(movie => (
          <FilmCard 
            key={movie.id}
            movie={movie} // pass whole movie obj
            filmsToWatch={filmsToWatch}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        ))}
    </>
  )
}

export default FilmsList
