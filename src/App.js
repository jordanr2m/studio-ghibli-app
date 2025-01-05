import { useEffect, useState } from 'react';
import './App.css';
import { FiLoader } from "react-icons/fi";
import Header from './components/Header';
import Watchlist from './components/movies/Watchlist';
import Films from './components/movies/Films';
import LearnMoreMsg from './components/LearnMoreMsg';
import SearchOptions from './components/search-sort/SearchOptions';
import Footer from './components/Footer';
import WatchListMsg from './components/WatchListMsg';


function App() {
  const [movies, setMovies] = useState([]);
  const [learnMore, setLearnMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Search bar states
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // Watchlist states
  const [filmsToWatch, setFilmsToWatch] = useState(JSON.parse(window.localStorage.getItem('watchlist')) || [])
  const [watchMsgText, setWatchMsgText] = useState("");
  const [showWatchMsg, setShowWatchMsg] = useState(false);
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

  const addToWatchlist = (filmId) => {
    const selectedFilm = movies.find(film => film.id === filmId);

    if (filmsToWatch.length < maxWatchlist) {
      setFilmsToWatch([...filmsToWatch, selectedFilm]);
      setWatchMsgText("This film has been added to your watchlist!");
      setShowWatchMsg(true);
    } else {
      setWatchMsgText("Max number of watchlist films (3) reached. Remove one to add another.")
      setShowWatchMsg(true);
    }
  };

  const removeFromWatchlist = (filmId) => {
    const newWatchlist = filmsToWatch.filter(film => film.id !== filmId);
    setFilmsToWatch(newWatchlist);
    setWatchMsgText("This film has been removed from your watchlist.")
    setShowWatchMsg(true);
  };

  const convertRuntime = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    hours = hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "";
    remainingMinutes = remainingMinutes > 0 ? `${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"}` : "";
    return `${hours} ${remainingMinutes}`;
  };

  return (
    <div className="App">
      {showWatchMsg && (
        <WatchListMsg
          setShowWatchMsg={setShowWatchMsg}
          watchMsgText={watchMsgText}
        />
      )}

      {learnMore && (
        <LearnMoreMsg setLearnMore={setLearnMore} />
      )}

      <Header setLearnMore={setLearnMore} />

      <main>
        {filmsToWatch.length > 0 && (
          <Watchlist
            filmsToWatch={filmsToWatch}
            maxWatchlist={maxWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            convertRuntime={convertRuntime}
          />
        )}

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
            removeFromWatchlist={removeFromWatchlist}
            convertRuntime={convertRuntime}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
