import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentsList, Student } from "../../utils/students";

const initialState: StudentsList = {
    students: []
}
const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudentElement(state, action: PayloadAction<Student>) {
            state.students.push(action.payload)
        }
    }
})
export default studentSlice.reducer
export const { addStudentElement } = studentSlice.actions