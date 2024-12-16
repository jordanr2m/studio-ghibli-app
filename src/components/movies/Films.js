import FilmsList from "./FilmsList"

const Films = ({ searchResults }) => {
  return (
    <section className="all-films wrapper">
      <p className='directions'>Click each card to see more information. Click the star icon to add the film to your watchlist.</p>
      
      {searchResults.length ? (
        <FilmsList searchResults={searchResults} />
      ) : (
        <p>Sorry, no films match your search.</p>
      )}
    </section>
  )
}

export default Films
