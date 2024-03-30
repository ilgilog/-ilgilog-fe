import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clickDate: "",
    clickDateText: "",
}

export const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        setClickDate: (state, action) => {
            state.clickDate = action.payload
        },
        setClickDateText: (state, action) => {
            state.clickDateText = action.payload
        }
    }
})

export const {
    setClickDate,
    setClickDateText
} = dateSlice.actions

export default dateSlice.reducer