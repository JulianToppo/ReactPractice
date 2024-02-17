import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const cart = createSlice({
  name: "cart",
  initialState: {
    show: true,
    items: [],
    totalItems: 0,
  },
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
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
      
    },
  },
});

export const { toggleShow, addCartItems, deleteCartItems } = cart.actions;
export default cart.reducer;
