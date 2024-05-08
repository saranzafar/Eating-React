import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    userData: [{ credentials: {}, }]
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
    }
})

export const { sigin, refreshState, logout } = authSlice.actions
export default authSlice.reducer