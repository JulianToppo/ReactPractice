import React, { useCallback, useContext } from "react";
import "./CartItems.css";
import CartContext from "../../store/cart-contexts";

export default function CartItems(props) {
  console.log("cartItems", props);
  
  const cartCtx=useContext(CartContext);

  const onDeleteClickHandler=(e)=>{
    e.preventDefault();
    let elem=e.target.parentElement.parentElement.childNodes[0].firstChild.childNodes[0].data;
    cartCtx.removeItem(elem)  
  }
  return (
    <div >
      <div className="cartOrder">
        <span>
          <h1>{props.item.name}</h1>
          <p>${props.item.price}</p>
        </span>

        <span className="cartOrderButtons">
          <button onClick={onDeleteClickHandler}>-</button>
          <button >+</button>
        </span>
      </div>

      <hr />
    </div>
  );
}
