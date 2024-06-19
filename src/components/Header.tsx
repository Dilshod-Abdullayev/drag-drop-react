import React from 'react';
import ClassLists from "./ClassLists";
import Sidetop from "./SideTopComponents/Sidetop";
import StudentList from "./StudentList";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import {Student} from '../utils/students'

export default function Header() {
    const [students, setStudents] = React.useState<Student[]>([
        { id: '1', name: 'Dilshod', lastname: 'Dilshodov', age: 22, male: 'male', course: 'Frontend' },
        { id: '2', name: 'Elbek', lastname: 'Rashidov', age: 17, male: 'male', course: 'Frontend' },
        { id: '3', name: 'Nurbek', lastname: 'Saidov', age: 30, male: 'male', course: 'Frontend' },
    ]);

    const [classList, setClassList] = React.useState<Student[]>([]);
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = Array.from(
                source.droppableId === 'studentList' ? students : classList
            );
            const [reorderedItem] = items.splice(source.index, 1);
            items.splice(destination.index, 0, reorderedItem);

            if (source.droppableId === 'studentList') {
                setStudents(items);
            } else {
                setClassList(items);
            }
        } else {
            const sourceItems = Array.from(
                source.droppableId === 'studentList' ? students : classList
            );
            const destinationItems = Array.from(
                destination.droppableId === 'studentList' ? students : classList
            );
            const [movedItem] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, movedItem);

            if (source.droppableId === 'studentList') {
                setStudents(sourceItems);
                setClassList(destinationItems);
            } else {
                setClassList(sourceItems);
                setStudents(destinationItems);
            }
        }
    };
    return (
        <div className="flex flex-col bg-slate-100 h-screen">
            <Sidetop />
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex justify-between">
                    <ClassLists students={classList} />
                    <StudentList students={students} />
                </div>
            </DragDropContext>
        </div>
    );
}
