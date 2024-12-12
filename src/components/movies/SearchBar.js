import { FaSearch } from "react-icons/fa";
import Sort from "./Sort";

const SearchBar = ({ search, setSearch, sortBy, movies, setMovies }) => {
    // console.log(search)
    return (
        <>
            <form className="search-films" onSubmit={(e) => e.preventDefault()}>
                <h2>Search films below</h2>
                <div className="search-wrapper">
                    <FaSearch />
                    <label htmlFor="search">Search Films</label>
                    <input
                        id='search'
                        type='text'
                        role='searchbox'
                        autoComplete='off'
                        placeholder='Search films'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {/* TO DO: Add sorting function (make separate component) */}
            </form>
            <Sort sortBy={sortBy} movies={movies} setMovies={setMovies}/>
        </>

    )
}

export default SearchBar
