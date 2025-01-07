import FilmsList from "./FilmsList"

const Films = ({ searchResults, filmsToWatch, addToWatchlist, removeFromWatchlist, convertRuntime }) => {
  return (
    <section className="all-films wrapper">
      {searchResults.length ? (
        <>
          <p className='directions'>Click on each card to see more information. Click the star icon to add or remove the film from your watchlist.</p>
          <FilmsList
            searchResults={searchResults}
            filmsToWatch={filmsToWatch}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            convertRuntime={convertRuntime}
          />
        </>

      ) : (
        <p className='no-match'>Sorry, no films match your search. Please try again.</p>
      )}
    </section>
  )
}

export default Films
