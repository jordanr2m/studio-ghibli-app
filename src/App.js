import { useEffect, useState } from 'react';
import './App.css';
import { FiLoader } from "react-icons/fi";
import Header from './components/Header';
import Watchlist from './components/movies/Watchlist';
import Films from './components/movies/Films';
import LearnMoreMsg from './components/LearnMoreMsg';
import SearchOptions from './components/search-sort/SearchOptions';
import Footer from './components/Footer';


function App() {
  const [movies, setMovies] = useState([]);
  const [learnMore, setLearnMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Search bar states
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // Watchlist states
  const [filmsToWatch, setFilmsToWatch] = useState(JSON.parse(window.localStorage.getItem('watchlist')) || [])
  const maxWatchlist = 3;
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

  // Call API
  useEffect(() => {
    fetchMovies();
  }, []);

  // Search bar functionality
  useEffect(() => {
    const filteredResults = movies.filter(movie => (
      (movie.title).toLowerCase()).includes(search.toLowerCase()
      )
    );
    setSearchResults(filteredResults)
  }, [movies, search]);

  // Save Watchlist in local storage
  useEffect(() => {
    window.localStorage.setItem('watchlist', JSON.stringify(filmsToWatch));
  }, [filmsToWatch]);

  // Add & remove from Watchlist
  const addToWatchlist = (filmId) => {
    const selectedFilm = movies.find(film => film.id === filmId);

    if (filmsToWatch.length < maxWatchlist) {
      setFilmsToWatch([selectedFilm, ...filmsToWatch]);
    }
  }


  return (
    <div className="App">
      {learnMore && (
        <LearnMoreMsg setLearnMore={setLearnMore} />
      )}
      <Header setLearnMore={setLearnMore} />

      <main>
        {/* {filmsToWatch.length > 0 && <Watchlist /> } */}
        <Watchlist />
        <SearchOptions
          search={search}
          setSearch={setSearch}
          movies={movies}
          setMovies={setMovies}
        />
        {isLoading ? (
          <FiLoader className='loader' />
        ) : (
          <Films 
          searchResults={searchResults} 
          filmsToWatch={filmsToWatch}
          addToWatchlist={addToWatchlist}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
