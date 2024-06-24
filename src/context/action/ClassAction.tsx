// classSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../../utils/students";

interface Class {
  id: number;
  name: string;
  color: string;
  students: Student[];
}

interface ClassesState {
  classes: Class[];
}

const initialState: ClassesState = {
  classes: []
};

const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    addClasselement(state, action: PayloadAction<Class>) {
      state.classes.push(action.payload);
    },
    updateClasses(state, action: PayloadAction<Class[]>) {
      state.classes = action.payload;
    },

  }
});

export default classSlice.reducer;
export const { addClasselement, updateClasses } = classSlice.actions;
