import { configureStore } from "@reduxjs/toolkit";
import authSlics from "./features/authSlics";

const store = configureStore({
    reducer: {
        auth: authSlics
    }
})

export default store