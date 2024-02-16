import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatabaseFunctions from "../utils/storefunctions/DatabaseFunctions";
import { downloadExpenses } from "../utils/store/ExpenseSlice";

const DailyExpenses = () => {
  const { getExpenses, addExpenseFunc, deleteExpenseFunc, editExpenseFunc } =
    DatabaseFunctions();
  const expensesStr = useSelector((store) => store.expenses);
  const dispatch = useDispatch();
  const [ispremium, setisPremium]= useState(false)
  const [expenses, setExpenses] = useState({});
  const [isUpdate, setIsUpdate] = useState({
    id: "",
    status: false,
  });
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
    console.log("changes in expenseslice", expensesStr.expenses);
    setExpenses(expensesStr.expenses);
  }, [expensesStr.expenses]);

  useEffect(() => {
    getExpenses();
  }, []);

  const addNewEntry = async () => {
    const formObj = {
      description: desc.current.value,
      price: price.current.value,
      category: category.current.value,
    };

    addExpenseFunc(formObj);
    // Clear input fields after submission
    desc.current.value = "";
    price.current.value = "";
    category.current.value = "";
  };

  const updateEntry = () => {
    const formObj = {
      description: desc.current.value,
      price: price.current.value,
      category: category.current.value,
    };

    editExpenseFunc(isUpdate.id, formObj);

    // Clear input fields after submission
    desc.current.value = "";
    price.current.value = "";
    category.current.value = "";

    setIsUpdate({
      id: "",
      status: false,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (isUpdate.status) {
      updateEntry();
    } else {
      addNewEntry();
    }
  };

  const onDeleteHandler = async (e) => {
    e.preventDefault();

    setIsUpdate(!isUpdate);
    console.log(e);
    const id = e.target.parentElement.parentElement.attributes.id.value;
    if (await deleteExpenseFunc(id)) {
      e.target.parentElement.parentElement.remove();
    }
  };

  const onEditHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const id = e.target.parentElement.parentElement.attributes.id.value;

    desc.current.value =
      e.target.parentElement.parentElement.children[0].innerText;
    price.current.value =
      e.target.parentElement.parentElement.children[1].innerText;
    category.current.value =
      e.target.parentElement.parentElement.children[2].innerText;

    setIsUpdate({
      status: true,
      id: id,
    });
  };

  const onDownloadClick=(e)=>{
    e.preventDefault();
    dispatch(downloadExpenses());
  } 

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
            {isUpdate.status ? "Update Expense" : "Add Expenses"}
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200 p-4">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td/> <td/> <td> <button className="bg-blue-300 p-4 rounded-lg" onClick={onDownloadClick}>Export CSV </button></td>  <td/>
              <td>
               {expensesStr.totalExpense>10000 ? <button className="bg-blue-300 p-4 rounded-lg">Add Premium</button> : expensesStr.totalExpense}
               
              </td>
            </tr>
            {Object.entries(expenses).map(([key, value]) => (
              <tr id={key} key={key}>
                <td>{value.description}</td>
                <td>{value.price}</td>
                <td>{value.category}</td>

                <td>
                  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={onDeleteHandler}
                  >
                    Delete
                  </button>
                  <button
                    className="text-indigo-600 hover:text-indigo-900 ml-2"
                    onClick={onEditHandler}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyExpenses;
