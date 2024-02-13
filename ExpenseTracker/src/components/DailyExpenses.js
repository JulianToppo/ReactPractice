import React, { useContext, useEffect, useRef, useState } from "react";
import UserDatabase from "../utils/context/UserDatabaseContext";

const DailyExpenses = () => {
  const dbCtx = useContext(UserDatabase);
  const [expenses, setExpenses] = useState({});
  const desc = useRef();
  const price = useRef();
  const category = useRef();

  const expenseCategories = [
    "Housing",
    "Transportation",
    "Food and Dining",
    "Utilities",
    "Healthcare",
    "Entertainment",
    "Personal Care",
    "Debt Payments",
    "Insurance",
    "Savings",
    "Clothing and Accessories",
    "Education",
    "Gifts and Donations",
    "Travel",
    "Miscellaneous",
  ];

  useEffect(() => {
    setExpenses(dbCtx.expenses);
  }, [dbCtx.expenses]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formObj = {
      description: desc.current.value,
      price: price.current.value,
      category: category.current.value,
    };

    if(dbCtx.addExpenses(formObj)){
      setExpenses((expenses) => {
      return {...expenses, formObj};
    });
    }
    
    // Clear input fields after submission
    desc.current.value = "";
    price.current.value = "";
    category.current.value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-2 bg-slate-500">
        {/* form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex rounded-lg flex-row space-x-3 "
        >
          <label>Description:</label>
          <input type="text" ref={desc} className="mb-1"></input>

          <label>Price:</label>
          <input type="number" ref={price} className="mb-1"></input>

          <label>Category:</label>
          <select type="text" ref={category} className="mb-1">
            {expenseCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button type="submit" className="p-1 bg-red-200 mb-2">
            Add Expenses
          </button>
        </form>
      </div>
      <div className="space-y-3">
        {Object.entries(expenses).map(([key,value]) => (
          <div className="flex bg-blue-200 justify-evenly  p-2" key={key}>
            <li>{value.description}</li>
            <li>{value.price}</li>
            <li>{value.category}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyExpenses;
