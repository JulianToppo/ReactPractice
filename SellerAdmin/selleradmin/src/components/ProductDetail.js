import React, { useRef } from 'react'

export default function ProductDetail(props) {

  useRef();
    console.log("product details called",props.products)
    const onClickHandler=(e)=>{
      e.preventDefault()
      console.log((e.target.parentElement.childNodes[6]))
      localStorage.removeItem(e.target.parentElement.childNodes[6])
     // e.target.parentElement.remove();

     

    }
  return (
   <>
    {props.products.length>0 && props.products.map((item)=>{
       return <li key={item.id}>{item.price}-{item.productName}-{item.category}-{item.id}<button onClick={onClickHandler}>Delete Product</button></li>
    })}
   </>
  )
}
