import React, { useState } from "react";
import classes from "./Movie.module.css";
import { firebaseURL } from "../utils/constants";

const Movie = (props) => {
  console.log("Movie key", props.id);
  const [show, setShow] = useState(true);

  const onClickHandler = async (e) => {
    try {
      e.preventDefault();
      const del = await fetch(`${firebaseURL}movies/${props.id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (del.ok === true) {
        setShow(false);
        props.getMovies()
        console.log("successfully deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    
    <React.Fragment>
      {show && <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={onClickHandler}>Delete </button>
    </li>

      }
       
    </React.Fragment>
     
    
  );
};

export default Movie;
