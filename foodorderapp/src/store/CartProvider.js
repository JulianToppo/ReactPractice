import React, { useState } from "react";
import CartContext from "./cart-contexts";
import Cart from "../component/Cart/Cart";

export default function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCartHandler = function (item) {
    setCartItems((cartItems) => {
      return [...cartItems, item];
    });
  };

  const removeItemCartHandler = (val) => {
    let x = cartItems.filter((item,i) => {
      if (item.name != val) {
        return item;
      }else{
        item.count=item.count-1;
        item.price=item.price-item.individualprice;
        if(item.count!=0){
          return item;
        }
      }
    })

    setCartItems(x);
  };

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
