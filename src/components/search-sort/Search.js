import { FaSearch } from "react-icons/fa";

const Search = ({ search, setSearch }) => {
    return (
        <form className="search-films" onSubmit={(e) => e.preventDefault()}>
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
        </form>
    )
}

export default Search
