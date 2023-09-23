import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

function Sections(props) {
  console.log("Section called");
  const [skincareProducts, setskincareProducts] = useState([]);
  const [electronicProducts, setElectronicProducts] = useState([]);
  const [foodProducts, setfoodProducts] = useState([]);

  console.log(props)

  useEffect(()=>{
    for (let i = 0; i <props.val.length; i++) {
      console.log("items present",props.val);
      let item = props.val[i];
      switch (item.category) {
        case "Skincare":
          setskincareProducts((skincareProducts) => {
            return [...skincareProducts, item];
          });
          break;
        case "Electronics":
          setElectronicProducts((electronicProducts) => {
            return [...electronicProducts, item];
          });
          break;
        case "Food":
          console.log("Food before called", foodProducts);
          setfoodProducts((foodProducts) => {
            return [...foodProducts, item];
          });
          console.log("Food called", foodProducts);
          break;
        default:
          break;
      }
    } 
    
    return ()=>{
      setskincareProducts([]);
      setElectronicProducts([]);
      setfoodProducts([])
  }
  }
  
 ,[props.val])
  

  return (
    <div>
      <h1>Products</h1>
      <h1>Electronic Items</h1>
      <ul>
        <ProductDetail products={electronicProducts} />
      </ul>
      <h1>Skincare Items</h1>
      <ul>
        <ProductDetail products={skincareProducts} />
      </ul>
      <h1>Food Items</h1>
      <ul>
        <ProductDetail products={foodProducts} />
      </ul>
    </div>
  );
}

export default Sections;
