import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: [{ credentials: {}, }],
    questions: [],
    response: []
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        sigin: (state, action) => {
            const data = {
                credentials: action.payload,
            }

            state.userData.push(data)
            sessionStorage.setItem("userData", JSON.stringify(data.credentials))
        },
        logout: (state) => {
            state.userData.push(null)

        },
        question: (state, action) => {
            state.questions = action.payload
        },
        response: (state, action) => {
            state.response = action.payload
        }
    }
})

export const { sigin, logout, question, response } = authSlice.actions
export default authSlice.reducer