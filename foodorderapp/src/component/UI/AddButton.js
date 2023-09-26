import React from 'react'
import './AddButton.css'
import Input from './Input'

export default function AddButton() {
  return (
    <div className='OrderCount'>
        <Input label="Amount" input={{
            type:"number",
            id:"amount",
            min:1,
            max:2,
            defaultValue:'1'
        }}/>
      <br></br>
      <button className='AddButton'>+Add</button>
    </div>
  )
}
