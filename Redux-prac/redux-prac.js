import { createStore } from 'redux';

const counterReducer = (state = 10, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 5;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENTBY2':
      return state+2;
    case 'DECREMENTBY2':
      return state-2;
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
store.dispatch({type:'INCREMENTBY2'})
store.dispatch({type: 'DECREMENTBY2'})


