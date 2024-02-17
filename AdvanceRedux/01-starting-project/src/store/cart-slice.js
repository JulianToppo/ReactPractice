import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const cart = createSlice({
  name: "cart",
  initialState: {
    show: true,
    items: [],
  },
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    },
    addCartItems: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteCartItems: (state, action) => {
      // const newstate=state.items.map(())
    },
  },
});

export const { toggleShow, addCartItems, deleteCartItems } = cart.actions;
export default cart.reducer;
