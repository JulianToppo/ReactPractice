import React from "react";
import DUMMY_MEALS from "../DummyValue/DummyValues";
import MealItems from "./MeaItems";
import Card from "../UI/Card";


const menu_values = DUMMY_MEALS.map((item) => {
  return (
    <>
    <MealItems
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
    </>
  );
});

export default function Menu() {
  return (
    <React.Fragment>
      <Card>{menu_values}</Card>
    </React.Fragment>
  );
}
