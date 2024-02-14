import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 5;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


const store = createStore(counterReducer);

const handleStateChange = () => {
  console.log('State changed:', store.getState());
};

const unsubscribe = store.subscribe(handleStateChange);

store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({type:'DECREMENT'});


