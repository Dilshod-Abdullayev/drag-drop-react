import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassList, Classes } from "../../utils/class";
const initialState: ClassList = {
    classes: []
}
const classSlice = createSlice({
    name: 'class',
    initialState,   
    reducers: {
        addClasselement(state, action: PayloadAction<Classes>) {
            state.classes.push(action.payload);
        }
    }
})
export default classSlice.reducer;
export const { addClasselement } = classSlice.actions;