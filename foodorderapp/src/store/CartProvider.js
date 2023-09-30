import React, { useState } from 'react'
import CartContext from './cart-contexts'
import Cart from '../component/Cart/Cart'


export default function CartProvider(props) {

  const [cartItems,setCartItems]=useState([]);
  
    const addItemToCartHandler= function(item){
      setCartItems((cartItems)=>{
        return [...cartItems,item];
      })
    };

    const removeItemCartHandler=item=>{};

    const cartContext={
        items:cartItems,
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemCartHandler
    }
  return (

    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
