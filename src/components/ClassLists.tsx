import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Student } from '../utils/students';
import { useSelector } from 'react-redux';
interface ClassListsProps {
  students: Student[];
}
const ClassLists: React.FC<ClassListsProps> = ({ students }) => {
  const classes = useSelector((state: any) => state.class.classes);
  return (
    <Droppable droppableId="classList">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className='w-96 p-2 h-64 overflow-y-scroll  flex-wrap dark:border-white border-4 flex justify-between  border-slate-700 rounded-lg shadow-2xl'
        >
          {students.map((student, index) => (
            <Draggable key={student.id} draggableId={String(student.id)} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="w-1/2 cursor-pointer mt-2  p-4 border-2 h-12 gap-1 shadow-lg flex items-center"
                >
                  <img className="w-10" src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt="student" />
                  <h1 className="text-2xl dark:text-white  font-bold">{student.name}</h1>
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

export default ClassLists;
