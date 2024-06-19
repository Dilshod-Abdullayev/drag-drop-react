import { configureStore } from "@reduxjs/toolkit";
import classSlice from "./action/ClassAction";
import studentSlice from './action/StudentAction'
import ThemeAction from "./action/ThemeAction";
const store = configureStore({
    reducer: {
        classSlice: classSlice,
        studentSlice: studentSlice,
        theme: ThemeAction
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store