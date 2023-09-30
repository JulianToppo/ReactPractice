import React, { useContext, useState } from "react";
import "./AddButton.css";
import Input from "./Input";
import CartProvider from "../../store/CartProvider";
import CartContext from "../../store/cart-contexts";

export default function AddButton(props) {
  const [itemCount, setItemCount] = useState(0);

  const cartCtx = useContext(CartContext);
  const onClickAddHandler = (e) => {
    console.log("onClick called");
    e.preventDefault();
    cartCtx.addItem({
      name: props.name,
      count: itemCount,
      price: props.price * itemCount,
      individualprice:props.price
    });
  };

  const changeItemCountHandler = (e) => {
    setItemCount(e.target.value);
  };

  return (
    <div className="OrderCount">
      {/* <Input label="Amount" input={{
            type:"number",
            id:"amount",
            min:1,
            max:2,
            defaultValue:'1' */}
      {/* }}/> */}
      <label>Amount:</label>
      <input
        type="number"
        id="amount"
        min="1"
        max="2"
        value={itemCount}
        onChange={changeItemCountHandler}
      ></input>
      <br></br>
      <button className="AddButton" onClick={onClickAddHandler}>
        +Add
      </button>
    </div>
  );
}
