import React from 'react'

export default function Orders(props) {

  const onClickHandler=(e)=>{
    e.preventDefault();
    localStorage.removeItem(e.target.parentElement.id);
    e.target.parentElement.remove();
  }

  return (
    <div>
      {
        props.val.length>0 && props.val.map((item)=>{
          return <li id={item.id}>{item.price}-{item.table}-{item.dish}<button onClick={onClickHandler}>Delete Order</button></li>
        })
      }
    </div>
  )
}
