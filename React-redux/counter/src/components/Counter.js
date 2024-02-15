import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  const incrementFunc =()=>{
    dispatch({type:'IncrementBy5'})
  }

  const decrementFunc = () =>{
    dispatch({type:'DecrementBy5'})
  }

  return (
    <React.Fragment>
      <button>{counter}</button>
      <button onClick={incrementFunc}>Increment</button>
      <button onClick={decrementFunc}>Descrement</button>
    </React.Fragment>
  );
};

export default Counter;
