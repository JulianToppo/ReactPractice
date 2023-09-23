
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Sections from './components/Sections';

function App() {
   const [products,setProducts]=useState([])

   console.log(products);
   const addProducts=(newObj)=>{
    console.log("item added")
      setProducts((products)=>{
        return [...products,newObj];
      })
   }

  return (
    <div className="App">
      <Form product={addProducts}/>
      <Sections val={products}/>
    </div>
  );
}

export default App;
