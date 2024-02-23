// 1.
import { configureStore } from '@reduxjs/toolkit'
// 3.
import todoReducer from '../features/todo/todoSlice'

// 4.now  we can combine our reducers into one root reducer by using the combineReducers function exported from Redux Toolkit
// 2. it take object
export const store = configureStore({
    reducer: todoReducer
})

