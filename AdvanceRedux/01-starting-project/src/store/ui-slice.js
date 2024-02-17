import { createSlice } from "@reduxjs/toolkit";

const uislice=createSlice({
name:'ui',
initialState:{
    notification:null
},
reducers:{
    showNotification:(state,action)=>{
        state.notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.title
        }
    }
}

})


export const {showNotification}= uislice.actions
export default uislice.reducer