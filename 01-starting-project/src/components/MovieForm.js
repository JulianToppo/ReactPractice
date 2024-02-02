import React, { useRef } from "react";
import "./MovieForm.css";
import { firebaseURL } from "../utils/constants";

const MovieForm = (props) => {
  const title = useRef();
  const openingtext = useRef();
  const releaseDate = useRef();

  const onSubmitHandler = async(e) => {
    try {
      e.preventDefault();
      const NewMovieObj = {
        title: title.current.value,
        openingtext: openingtext.current.value,
        releaseDate: releaseDate.current.value,
      };

      console.log(NewMovieObj);

      const response=  await fetch(firebaseURL + "movies.json", {
        method: "POST",
        body: JSON.stringify(NewMovieObj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data=await response.json()
      console.log(data)

      props.getMovies();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <label>Title</label>
      <input type="text" ref={title}></input>

      <label>Opening text</label>
      <input type="text" ref={openingtext}></input>

      <label>Release Date</label>
      <input type="date" ref={releaseDate}></input>

      <button onClick={onSubmitHandler}>Add Movie</button>
    </form>
  );
};

export default MovieForm;
