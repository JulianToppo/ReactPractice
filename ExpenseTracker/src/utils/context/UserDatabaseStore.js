import React, { useEffect, useState } from 'react'
import UserDatabase from './UserDatabaseContext'
import { firebaseDBURL } from '../firebase/dbConstants'

const UserDatabaseStore = (props) => {

    const [expenses, setexpenses] = useState({})



    const getExpenses = async()=>{
        try {
            const post = await fetch(firebaseDBURL+'expenses.json', {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            const data = await post.json();
            if (post.ok) {
              console.log("Data from firebase successfully fetched");
              
              console.log(data);
              setexpenses(data)
                
            } else {
              throw new Error(data.error.message);
            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=>{
        getExpenses();
    },[])

    const addExpenseFunc = async (formObj)=>{
        try {
            const post = await fetch(firebaseDBURL+'expenses.json', {
              method: "POST",
              body: JSON.stringify(formObj),
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            const data = await post.json();
            if (post.ok) {
              console.log("Database entry successfully sent");
              console.log(data);
                return true;
            } else {
              throw new Error(data.error.message);
            }
          } catch (error) {
            console.log(error);
          }
        }
      

    const store={
        expenses:expenses,
        addExpenses:addExpenseFunc
    }
  return (
    <UserDatabase.Provider value={store}>
        {props.children}
     </UserDatabase.Provider>
  )
}

export default UserDatabaseStore