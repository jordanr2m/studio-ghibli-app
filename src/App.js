import { useEffect, useState } from 'react';
import './App.css';
import { FiLoader } from "react-icons/fi";
import Header from './components/Header';
import FavoriteFilms from './components/movies/FavoriteFilms';
import Films from './components/movies/Films';
import LearnMoreMsg from './components/LearnMoreMsg';
import SearchBar from './components/movies/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [learnMore, setLearnMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Search bar states
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // Sort states
  // const [sortBy, setSortBy] = useState("Alphabetically");
  const ghibliUrl = "https://ghibliapi.vercel.app/films";

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const request = await fetch(ghibliUrl);
      const results = await request.json();
      setMovies(results);
    } catch (err) {
      console.log("Something went wrong.", err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Remove Learn More Msg
  const removeMessage = () => {
    setLearnMore(false);
  };

  // Filter search results (search bar functionality)
  useEffect(() => {
    const filteredResults = movies.filter(movie => (
      (movie.title).toLowerCase()).includes(search.toLowerCase()
      )
    );
    setSearchResults(filteredResults)
  }, [movies, search]);


  // Sorting Logic
  // const sortData = (option) => {
  //   const sortedFilms = [...movies].sort((a, b) => (
  //     a[option].localCompare(b[option])
  //   ))
  //   setSearchResults(sortedFilms);
  //   console.log(sortedFilms);
  // }

  // Sorting Functionality
  // const handleSortChange = (e) => {
  //   const selectedOption = e.target.value;
  //   setSortBy(selectedOption);
  //   sortData(selectedOption);
  // };


  return (
    <div className="App">
      {learnMore && (
        <LearnMoreMsg removeMessage={removeMessage} />
      )}
      <Header setLearnMore={setLearnMore} />

      <main>
        <FavoriteFilms />
        <SearchBar
          search={search}
          setSearch={setSearch}
          // sortBy={sortBy}
          // handleSortChange={handleSortChange}
          movies={movies}
          setMovies={setMovies}
        />
        {isLoading ? (
          <FiLoader className='loader' />
        ) : (
          <Films searchResults={searchResults} />
        )}
      </main>
    </div>
  );
}

export default App;
