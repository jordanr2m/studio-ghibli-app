import Search from "./Search";
import Sort from "./Sort";

const SearchOptions = ({ search, setSearch, movies, setMovies }) => {
    return (
        <div className="search-options">
            <h2>Browse films below</h2>
            <div className="options-wrapper">
                <Search search={search} setSearch={setSearch} />
                <Sort movies={movies} setMovies={setMovies} />
            </div>
        </div>
    )
}

export default SearchOptions
