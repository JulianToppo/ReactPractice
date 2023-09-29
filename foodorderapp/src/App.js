import { Fragment, useState } from 'react';
import Menu from './component/Meals/Menu'
import Header from './component/Layout/Header';
import Cart from './component/Cart/Cart'

function App() {
  const [seeCartItems,setseeCartItems]=useState(0);

  const toggleCartDisplay=()=>{
    let x=seeCartItems^1;
    setseeCartItems(x);
  }

  return (
    <Fragment>
      <Header toggleCartDisplayFunction={toggleCartDisplay}/>
      <Menu/> 
      {seeCartItems===1 && <Cart toggleCartDisplayFunction={toggleCartDisplay}/>}
    </Fragment>
   
  );
}

export default App;