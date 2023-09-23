import React, { useState } from 'react'

function Form(props) {

    const[sellerPrice,setsellerPrice]=useState("");
    const[productid,setProductID]=useState("");
    const[productName,setproductName]=useState("");
    const[category,setcategory]=useState("Food");

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const formObj={
            id:productid,
            price:sellerPrice,
            productName:productName,
            category:category
        }

        if(localStorage.getItem(productid)==null){
            props.product(formObj);
            localStorage.setItem(productid,JSON.stringify(formObj));
           
        }
    }

    const sellerPriceHandler=(e)=>{
        setsellerPrice(e.target.value)
    }

    const priceIdHandler=(e)=>{
        setProductID(e.target.value)
    }

    const productNameHandler=(e)=>{
        setproductName(e.target.value)
    }

    const categoryHandler=(e)=>{
        console.log(e.target.value)
        setcategory(e.target.value)
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="productId">ProductId:</label>
        <input type="number" id="productId" value={productid} onChange={priceIdHandler}></input>
        <label htmlFor="sellerPrice">Seller Price:</label>
        <input type="text" id="sellerPrice" value={sellerPrice} onChange={sellerPriceHandler}></input>
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" value={productName} onChange={productNameHandler}></input>

        <label htmlFor='category'>Choose a category:</label>
        <select id="category" value={category} onChange={categoryHandler}>
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="Skincare">Skincare</option>
        </select>
        <button type='submit'>Add Product</button>
    </form>
  )
}

export default Form
