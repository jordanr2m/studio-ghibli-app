import React from 'react'
import FilmCard from './FilmCard'

const FilmsList = ({ searchResults, filmsToWatch, addToWatchlist }) => {
  return (
    <>
      {searchResults.map(movie => (
          <FilmCard 
            key={movie.id}
            movie={movie} // pass whole movie obj
            filmsToWatch={filmsToWatch}
            addToWatchlist={addToWatchlist}
            // TO DO: add functions for adding to favorites and removing from favorites
          />
        ))}
    </>
  )
}

export default FilmsList
