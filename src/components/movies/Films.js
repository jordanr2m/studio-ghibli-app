import FilmsList from "./FilmsList"

const Films = ({ searchResults }) => {
  return (
    <section className="all-films wrapper">
      {searchResults.length ? (
        <FilmsList searchResults={searchResults} />
      ) : (
        <p>Sorry, no films match your search.</p>
      )}
    </section>
  )
}

export default Films
