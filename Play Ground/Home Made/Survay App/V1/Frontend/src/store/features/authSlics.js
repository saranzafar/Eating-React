import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
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

            state.status = true
            state.userData.push(data)
            sessionStorage.setItem("userData", JSON.stringify(data))
            console.log("slice data = ", data);
        }

    }
})

export const { sigin } = authSlice.actions
export default authSlice.reducer