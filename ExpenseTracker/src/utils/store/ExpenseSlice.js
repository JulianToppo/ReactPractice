import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: {},
  },
  reducers: {
    addExpenseRedx: (state, action) => {
 const {data,formObj}=action.payload;
      state.expenses = { ...state.expenses, [data['name']]:formObj};
 
    },
    setExpense:(state,action)=>{
      state.expenses=action.payload;
    }
  },
});

export const { addExpenseRedx,setExpense } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
