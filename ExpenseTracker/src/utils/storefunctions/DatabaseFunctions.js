import React, { useEffect, useState } from "react";
import { firebaseDBURL } from "../firebase/dbConstants";
import { useSelector, useDispatch } from "react-redux";
import { addExpenseRedx, setExpense } from "../store/ExpenseSlice";

const DatabaseFunctions = (props) => {
  const expenses = useSelector((store) => store.expenses);
  const dispatch = useDispatch();

  const getExpenses = async () => {
    try {
      const post = await fetch(firebaseDBURL + "expenses.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await post.json();
      if (post.ok) {
        console.log("Data from firebase successfully fetched");

        console.log(data);
        {
          
          data && dispatch(setExpense(data));
        }
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addExpenseFunc = async (formObj) => {
    try {
      const post = await fetch(firebaseDBURL + "expenses.json", {
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
   
        dispatch(addExpenseRedx({data,formObj}));
        console.log("dispatch completed")
        return true;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpenseFunc = async (id) => {
    try {
      const post = await fetch(firebaseDBURL + "expenses/" + id + ".json", {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await post.json();
      console.log(post);
      if (post.ok) {
        console.log("Database entry successfully deleted");
        return true;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editExpenseFunc = async (id, formObj) => {
    try {
      const post = await fetch(firebaseDBURL + "expenses/" + id + ".json", {
        method: "PUT",
        body: JSON.stringify(formObj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await post.json();

      if (post.ok) {
        console.log("Database entry successfully edited");
        getExpenses();
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { editExpenseFunc, deleteExpenseFunc, addExpenseFunc, getExpenses };
};

export default DatabaseFunctions;
