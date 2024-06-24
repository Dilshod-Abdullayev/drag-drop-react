import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Student } from '../utils/students';

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  console.log("Rendering StudentList with students:", students); // Debugging purpose
  return (
    <Droppable droppableId="studentList">
      {(provided) => (
        <div
          className="flex flex-col items-center mt-2 rounded-md border-4 p-2 bg-white shadow-2xl dark:bg-slate-800 w-96 h-full"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-center select-none dark:text-white font-semibold text-3xl">All Students</h1>
          {students.map((student, index) => (
            <Draggable key={student.id} draggableId={String(student.id)} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="w-full mt-1 cursor-pointer shadow-xl gap-3 border dark:bg-slate-400 dark:border-slate-800 p-2 flex items-center h-12"
                >
                  <img className="h-full" src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt="student" />
                  <h1 className='font-extrabold'>Name: <span className="font-bold dark:text-white">{student.name}</span></h1>
                  <h1 className='font-extrabold'>Age: <span className="font-bold dark:text-white">{student.age}</span></h1>
                  <h1 className='font-extrabold'>Gender: <span className="font-bold dark:text-white">{student.male}</span></h1>
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
