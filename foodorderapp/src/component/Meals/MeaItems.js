import React from "react";
import "./MealItem.css";
import AddButton from "../UI/AddButton";

export default function MealItems(props) {
  return (
    <>
      <AddButton price={props.price}/>
      <h2 className="Dish_Name">{props.name}</h2>
      <p className="description">{props.description}</p>
      <p className="price">${props.price}</p>

      <hr />
    </>
  );
}
