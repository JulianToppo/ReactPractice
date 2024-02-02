import React, { useRef } from 'react'
 import './MovieForm.css'

const MovieForm = () => {

    const title=useRef();
    const openingtext=useRef();
    const releaseDate=useRef();

    const onSubmitHandler= (e)=>{
        try {
            e.preventDefault()
            const NewMovieObj={
                title:title.current.value,
                openingtext:openingtext.current.value,
                releaseDate:releaseDate.current.value
            }

            console.log(NewMovieObj)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form>
         <label>Title</label>
        <input type='text' ref={title} ></input>

        <label>Opening text</label>
        <input type='text'  ref={openingtext}></input>

        <label>Release Date</label>
        <input type='date'  ref={releaseDate}></input>

        <button onClick={onSubmitHandler}>Add Movie</button>
    </form>
  )
}

export default MovieForm