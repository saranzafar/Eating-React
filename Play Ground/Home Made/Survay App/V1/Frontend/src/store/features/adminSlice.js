import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: {}
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        question: (state, action) => {
            state.questions = action.payload
        },
    }
})

export const { question } = adminSlice.actions
export default adminSlice.reducer