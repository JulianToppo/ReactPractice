import React from 'react'
import './AddButton.css'

export default function AddButton() {
  return (
    <div className='OrderCount'>
        <label>Amount:</label>
      <input></input>
      <br></br>
      <button className='AddButton'>+Add</button>
    </div>
  )
}
