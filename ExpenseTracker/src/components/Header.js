import React, { useContext } from 'react'
import UserContext from '../utils/context/UserContext';

const Header = () => {

  const userCtx= useContext(UserContext);

  const onLogoutClickHandler = (e)=>{
    e.preventDefault();
    userCtx.LogoutUser();
  }

  return (
   <div className='flex justify-end p-4 rounded-lg bg-yellow-100'>
    <button className='bg-orange-400 px-6 py-1 rounded-lg' onClick={onLogoutClickHandler}>Logout</button>
   </div>
  )
}

export default Header