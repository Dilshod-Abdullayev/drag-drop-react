import { configureStore } from "@reduxjs/toolkit";
import classSlice from "./action/ClassAction";
import studentSlice from './action/studentSlice'
import ThemeAction from "./action/ThemeAction";
const store = configureStore({
    reducer: {
        class: classSlice,
        student: studentSlice,
        theme: ThemeAction
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store