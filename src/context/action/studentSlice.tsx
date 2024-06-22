import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentsList, Student } from "../../utils/students";

const initialState: StudentsList = {
  students: []
};
const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudentElement(state, action: PayloadAction<Student>) {
      // Ensure unique ID assignment
      if (!state.students.find(student => student.id === action.payload.id)) {
        state.students.push(action.payload);
      }
    },
    updateStudents(state, action: PayloadAction<Student[]>) {
      state.students = action.payload;
    }
  }
});

export default studentSlice.reducer;
export const { addStudentElement, updateStudents } = studentSlice.actions;
