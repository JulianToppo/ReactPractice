
import './App.css';
import OrderForm from './components/OrderForm';
import Tables from './components/Tables'
import { useState } from 'react';

function App() {
  const [orders,setOrders]=useState([]);

  const addOrders=(obj)=>{
    setOrders((orders)=>{
      return [...orders,obj];
    })
  }

  return (
    <div className="App">
      <OrderForm addOrders={addOrders}/>
      <Tables orders={orders}/>
    </div>
  );
}

export default App;
