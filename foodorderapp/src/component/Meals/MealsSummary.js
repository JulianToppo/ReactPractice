import React, { Fragment } from 'react'
import classes from './MealsSummary.module.css'

export default function MealsSummary() {
  return (
    <Fragment>
      <div className={classes["welcomeNote"]}>
        <h1>Delicious Food, Delievered To You</h1>
        <p>
          Choose your fabourite meal from our board selection of available meals 
          and enjoy a delicious<br></br>
          lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingredients,just-in-tie and
          of course by <br></br>experienced chefs!
        </p>
      </div>
    </Fragment>
  )
}
