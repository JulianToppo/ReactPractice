import {useState } from 'react';
import Menu from './component/Meals/Menu'
import Header from './component/Layout/Header';
import Cart from './component/Cart/Cart'
import CartProvider from './store/CartProvider';

function App() {
  const [seeCartItems,setseeCartItems]=useState(0);

  const toggleCartDisplay=()=>{
    let x=seeCartItems^1;
    setseeCartItems(x);
  }

  return (
    <CartProvider>
      <Header toggleCartDisplayFunction={toggleCartDisplay}/>
      <Menu/> 
      {seeCartItems===1 && <Cart toggleCartDisplayFunction={toggleCartDisplay}/>}
    </CartProvider>
   
  );
}

export default App;