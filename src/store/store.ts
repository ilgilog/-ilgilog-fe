import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import dateReducer from "./reducers/dateSlice";


export const store = configureStore({
    reducer: {
        userStore: userReducer,
        dateStore: dateReducer,
    }
})