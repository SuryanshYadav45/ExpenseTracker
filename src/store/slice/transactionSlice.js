import {createSlice} from "@reduxjs/toolkit";



const transactionSlice=createSlice({
    name:"transaction",
    initialState:[],
    reducers:
    {
        add:(state,action)=>
        {
            return [...state, action.payload];
        },
        del:(state,action)=>
        {
            return state.filter((item)=>item.id!==action.payload.id);
        }
    }
})

export const{add,del}=transactionSlice.actions;
export default transactionSlice.reducer;