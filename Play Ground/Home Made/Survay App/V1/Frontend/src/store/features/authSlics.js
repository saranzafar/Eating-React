import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: {
        name: "",
        email: "",
        password: ""
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup: (state, action) => {
            state.userData = action.payload.userData
            state.status = true
        }
    }
})

export const { signup } = authSlice.actions
export default authSlice.reducer