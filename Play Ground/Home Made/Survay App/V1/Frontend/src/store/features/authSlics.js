import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: [{ credentials: {}, }]
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup: (state, action) => {
            const data = {
                credentials: action.payload,
            }
            state.status = true
            state.userData.push(data)
            console.log("slice data = ", data);
        }

    }
})

export const { signup } = authSlice.actions
export default authSlice.reducer