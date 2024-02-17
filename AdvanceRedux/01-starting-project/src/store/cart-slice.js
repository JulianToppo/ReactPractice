import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";
import { showNotification } from "./ui-slice";

const cart = createSlice({
  name: "cart",
  initialState: {
    show: true,
    items: [],
    totalItems: 0,
    changed:false
  },
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    },
    replaceCart:(state,action)=>{
      state.items=action.payload.items;
      state.totalItems=action.payload.totalItems
    },
    addCartItems: (state, action) => {
      let repeat = false;
      const newstate = state.items.map((item) => {
        if (item.title == action.payload.title) {
          repeat = true;
          item.quantity = item.quantity + 1;
        }

        return item;
      });

      if (!repeat) {
        state.items = [...state.items, action.payload];
      } else {
        state.items = [...newstate];
      }
      state.totalItems=state.totalItems+1
      state.changed=true
    },
    deleteCartItems: (state, action) => {
      const newCartItems=state.items.map((item) => {
        if (item.title == action.payload.title) {
          item.quantity = item.quantity - 1;
          if(item.quantity==0){
            return null;
          }
        }

        return item;
      }).filter(Boolean);

      state.items = [...newCartItems];
      state.totalItems=state.totalItems-1
      state.changed=true
      
    },
  },
});

export const sendCartData =(cart)=>{
  return (dispatch)=>{
   dispatch(
      showNotification({
        status: "pending",
        title: "Sending... ",
        message: "Sending cart data!",
      })
    );
    
    const sendRequest= async ()=>{
          const response = await fetch(
      "https://expensetracker-1b48b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error("Sending cart data failed");
    }

    const responseData = await response.json();
    dispatch(
      showNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      })
    );
    }

    try {
      sendRequest();
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    }

  }
}


export const getCartData= ()=>{
  return (dispatch)=>{

    const sendRequest= async()=>{
      const response = await fetch(
        "https://expensetracker-1b48b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "GET",
       
        }
      );

      console.log(response)
      if(!response.ok){
        throw new Error('Error Fetching data')
      }

      const data= await response.json();
      
      dispatch(replaceCart(data))
    }


    try {
      sendRequest();
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Data fetching failed failed!",
        })
      );
    }
    

  }
}
export const { toggleShow, addCartItems, deleteCartItems ,replaceCart} = cart.actions;
export default cart.reducer;
