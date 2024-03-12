import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "1234455",
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const {
    setToken,
} = userSlice.actions

export default userSlice.reducer