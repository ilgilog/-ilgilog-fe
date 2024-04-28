import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: "",
    accessToken: "",
    refreshToken: "",
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setId: (state, action) => {
            state.userId = action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        }
    }
})

export const {
    setId,
    setAccessToken,
    setRefreshToken,
} = userSlice.actions

export default userSlice.reducer