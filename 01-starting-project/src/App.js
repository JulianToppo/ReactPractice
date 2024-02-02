import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import MovieForm from './components/MovieForm';
import {firebaseURL} from "./utils/constants"

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timerCancel,setTimerCancel]= useState("")
  
  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(firebaseURL+'movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong... Retrying');
      }
      const data = await response.json();
      console.log(data)
      let movieArray=[];
      for(let key in data){
        movieArray.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }
 
     console.log(movieArray)
      setMovies(movieArray);
      setIsLoading(false);
      if(timerCancel){
        clearTimeout(timerCancel)
      }
    } catch (error) {
      setError(error.message);
      let timer=setTimeout(fetchMovies, 5000);
      setTimerCancel(timer);
    }
  }
  ,[])

  useEffect(()=>{
     fetchMovies()
  }
  ,[fetchMovies])
  const cancelOnClickHandler= (e)=>{
    e.preventDefault();
    clearTimeout(timerCancel);
  }

  return (
    <React.Fragment>
      <section>
        <MovieForm getMovies={fetchMovies}/>
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
        <button onClick={cancelOnClickHandler}>Cancel</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList  getMovies={fetchMovies} movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {isLoading && !error && <p>Is Loading...</p>}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
