import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Student } from '../utils/students'
interface StudentListProps {
  students: Student[];
}
const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <Droppable droppableId="studentList">
      {(provided: any) => (
        <div
          className="flex flex-col items-center mt-2 rounded-md bg-white shadow-2xl w-96 h-full"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-center select-none font-semibold text-3xl">All Students</h1>
          {students.map((student, index) => (
            <Draggable key={student.id} draggableId={student.id} index={index}>
              {(provided: any) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="w-full mt-1 cursor-pointer shadow-xl gap-3 border p-2 flex items-center h-12"
                >
                  <img className="h-full" src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt="student" />
                  <h1>Name: <span className="font-bold">{student.name}</span></h1>
                  <h1>Age: <span className="font-bold">{student.age}</span></h1>
                  <h1>Gender: <span className="font-bold">{student.male}</span></h1>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default StudentList;
