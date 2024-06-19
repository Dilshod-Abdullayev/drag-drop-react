import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {Student} from '../utils/students'
interface ClassListsProps {
    students: Student[];
}
const ClassLists: React.FC<ClassListsProps> = ({ students }) => {
    return (
        <Droppable droppableId="classList">
            {(provided:any) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='w-96 p-2 h-64 border-2 flex justify-between flex-wrap border-slate-700 rounded-lg shadow-2xl'
                >
                    {students.map((student, index) => (
                        <Draggable key={student.id} draggableId={student.id} index={index}>
                            {(provided:any) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="w-1/2 cursor-pointer p-3 border-2 h-12 gap-1 shadow-lg flex items-center"
                                >
                                    <img className="w-10" src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt="student" />
                                    <h1 className="text-2xl font-bold">{student.name}</h1>
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