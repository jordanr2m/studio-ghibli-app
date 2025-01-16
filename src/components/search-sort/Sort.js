import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sort = ({ movies, setMovies }) => {
    // Sort options
    const [sortBy, setSortBy] = useState("release_date");

    // Convert Rotten Tomatoes score into a number
    const moviesToSort = [...movies];
    moviesToSort.forEach(movie => {
        movie.rt_score = Number(movie.rt_score);
    });

    const sortMovies = (option) => {
        const sortedMovies = [...moviesToSort].sort((a, b) => {
            if (typeof a[option] === "string") {
                // Sort alphabetically
                return a[option].localeCompare(b[option]);
            } else {
                // Return scores highest to lowest
                return b[option] - a[option];
            }
        });
        setMovies(sortedMovies);
    };

    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortBy(selectedOption); // update UI
        sortMovies(selectedOption);
    };

    return (
        <form className='sort-films' onSubmit={e => e.preventDefault()}>
            <label htmlFor='sort'>Sort Films:</label>
            <div className='sort-wrapper'>
                <select
                    id='sort'
                    name='sort'
                    value={sortBy}
                    onChange={handleSortChange}
                >
                    <option value="release_date">Release date</option>
                    <option value="title">Alphabetically</option>
                    <option value="director">Director</option>
                    <option value="rt_score">Rotten Tomatoes score</option>
                </select>
                <IoIosArrowDown className="arrow" />
            </div>
        </form>
    )
}

export default Sort
