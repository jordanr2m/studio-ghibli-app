import FilmsList from "./FilmsList"

const Films = ({ searchResults, filmsToWatch, addToWatchlist, removeFromWatchlist }) => {
  return (
    <section className="all-films wrapper">
      {searchResults.length ? (
        <>
          <p className='directions'>Click on each card to see more information. Click the star icon to add or remove the film to your watchlist.</p>
          <FilmsList
            searchResults={searchResults}
            filmsToWatch={filmsToWatch}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
          />
        </>

      ) : (
        <p className='no-match'>Sorry, no films match your search.</p>
      )}
    </section>
  )
}

export default Films
