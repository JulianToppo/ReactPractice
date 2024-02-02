import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timerCancel,setTimerCancel]= useState("")
  
  const fetchMovies = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('https://swapi.dev/api/film');
      if (!response.ok) {
        throw new Error('Something went wrong... Retrying');
      }
      const data = await response.json();
      const formattedMovies = data.results.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      }));
      setMovies(formattedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      let timer=setTimeout(fetchMovies, 5000);
      setTimerCancel(timer);
    }
  };

  const cancelOnClickHandler= (e)=>{
    e.preventDefault();
    clearTimeout(timerCancel);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
        <button onClick={cancelOnClickHandler}>Cancel</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {isLoading && !error && <p>Is Loading...</p>}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
