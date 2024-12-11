import React from 'react'
import FilmCard from './FilmCard'

const FilmsList = ({ searchResults }) => {
  return (
    <>
      {searchResults.map(movie => (
          <FilmCard 
            key={movie.id}
            movie={movie}
            // TO DO: add functions for adding to favorites, favorites, and removing from favorites
          />
        ))}
    </>
  )
}

export default FilmsList
