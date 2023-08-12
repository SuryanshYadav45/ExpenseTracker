import {configureStore} from "@reduxjs/toolkit";
import transactionReducer from "./slice/transactionSlice"

const store= configureStore({
    reducer:{
        transaction:transactionReducer,
    }
})


export default store;