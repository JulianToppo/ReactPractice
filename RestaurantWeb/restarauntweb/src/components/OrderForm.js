import React, { useState } from "react";

export default function OrderForm(props) {
  const [orderid, setorderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("table1");

  const idOnChangeHandler=(e)=>{
    setorderId(e.target.value)
  }

  const priceOnChangeHandler=(e)=>{
    setPrice(e.target.value)
  }

  const dishOnChangeHandler=(e)=>{
    setDish(e.target.value)
  }

  const tableOnChangeHandler=(e)=>{
    setTable(e.target.value)
  } 

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const order={
      id:orderid,
      price:price,
      dish:dish,
      table:table
    }

    if(localStorage.getItem(orderid)==null){
       localStorage.setItem(orderid,JSON.stringify(order));
       props.addOrders(order);
    }
   
   
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="orderId">Unique Order Id:</label>
      <input value={orderid} id="orderId" type="number" onChange={idOnChangeHandler}/>
      <label htmlFor="price">Choose Price</label>
      <input value={price} id="price" type="number" onChange={priceOnChangeHandler} />
      <label htmlFor="dish">Choose Dish:</label>
      <input value={dish} id="dish" type="text" onChange={dishOnChangeHandler} />
      <label htmlFor="table">Choose a table:</label>
      <select id="table" value={table} onChange={tableOnChangeHandler}>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
      <button type="submit">Add a bill</button>
    </form>
  );
}
