import React from 'react'
import DUMMY_MEALS from '../DummyValue/DummyValues'
import './Meals.css'

export default function Menu() {
  return (
    <React.Fragment>
      <div className="MenuCard">
            {DUMMY_MEALS.map((item)=>{
                return <>
                    <h2 className='Dish_Name'>{item.name}</h2>
                    <p className='description'>{item.description}</p>
                    <p className='price'>${item.price}</p>
                    <hr/>
                    </>
                }
            )
            }
      </div>
    </React.Fragment>
  )
}
