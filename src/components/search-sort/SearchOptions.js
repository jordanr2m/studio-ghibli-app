import Sort from "./Sort";
import Search from "./Search";

const SearchOptions = ({ search, setSearch, movies, setMovies }) => {
    return (
        <div className="search-options">
            <h2>Search films below</h2>
            <div className="options-wrapper">
                <Search search={search} setSearch={setSearch} />
                <Sort movies={movies} setMovies={setMovies} />
            </div>
        </div>
    )
}

export default SearchOptions
