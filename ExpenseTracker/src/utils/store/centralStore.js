import ExpenseSlice from "./ExpenseSlice"
import authSlice from "./authSlice"
import {configureStore} from "@reduxjs/toolkit"

const store=configureStore(
    {
        reducer:{
            'auth':authSlice,
            'expenses':ExpenseSlice
        },
    }
)

export default store