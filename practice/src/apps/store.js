import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
/*
                store (RTK)
                ^ 
                |
                Reducer(RTK)
                ^
                |
Use Selector(React)        Use Dispatch
.                      (React - wireup between react and redux) 
*/
