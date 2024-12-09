import { useEffect, useState } from 'react';
import './App.css';
import { FiLoader } from "react-icons/fi";
import Header from './components/Header';
import FavoriteFilms from './components/movies/FavoriteFilms';
import Films from './components/movies/Films';
import LearnMoreMsg from './components/LearnMoreMsg';

function App() {
  const [movies, setMovies] = useState([]);
  const [learnMore, setLearnMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <div className="App">
      {learnMore && (
        <LearnMoreMsg
          removeMessage={removeMessage}
        />
      )}
      <Header
        setLearnMore={setLearnMore}
      />
      <main>
        <FavoriteFilms />
        {isLoading ? (
          <FiLoader className='loader' />
        ) : (
          <Films
            movies={movies}
          />
        )}
      </main>
    </div>
  );
}

export default App;
