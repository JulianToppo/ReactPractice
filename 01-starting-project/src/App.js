import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';

function App() {
  const [movies, setmovies] = useState([])

  const fetchMovies=async (e)=>{
    e.preventDefault();

    const response= await fetch('https://swapi.dev/api/films');
    const data= await response.json();

    const formattedMovies= data.results.map((movie)=>{
      return {
        id:movie.episode_id,
        title:movie.title,
        releaseDate:movie.release_date,
        openingText:movie.opening_crawl
      }
    })

    setmovies(formattedMovies)

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
