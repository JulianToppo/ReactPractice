import { createStore } from "redux";

const initialState = {
  counter: 1,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IncrementBy5":
      return {
        counter: state.counter + 5,
      };
    case "DecrementBy5":
      return {
        counter: state.counter - 5,
      };
    default:
      return state;
  }
};

const store = createStore(storeReducer);

export default store;
