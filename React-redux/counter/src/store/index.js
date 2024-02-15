import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementBy5(state, action) {
      state.counter = state.counter - action.payload;
    }
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});
export const counterActions= counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

