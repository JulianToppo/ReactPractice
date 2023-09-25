import React from 'react'
import './Meals.css'

export default function Card(props) {
  return (
    <div className="MenuCard">
      {props.children}
    </div>
  )
}
