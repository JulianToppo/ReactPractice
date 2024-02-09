import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const onLogoutClickHandler = (e)=>{
    e.preventDefault();
    localStorage.removeItem("token")
    navigate('/')
  }

  return (
   <div className='flex justify-end p-4 rounded-lg bg-yellow-100'>
    <button className='bg-orange-400 px-6 py-1 rounded-lg' onClick={onLogoutClickHandler}>Logout</button>
   </div>
  )
}

export default Header