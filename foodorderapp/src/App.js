import { Fragment } from 'react';
import Menu from './component/Meals/Menu'
import Header from './component/Layout/Header';
import Cart from './component/Cart/Cart'

function App() {
  return (
    <Fragment>
      <Header />
      <Menu/> 
      <Cart/>
    </Fragment>
   
  );
}

export default App;