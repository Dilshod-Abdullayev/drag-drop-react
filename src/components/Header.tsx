import React, { useEffect, useState } from 'react';
import ClassLists from "./ClassLists";
import Sidetop from "./SideTopComponents/Sidetop";
import StudentList from "./StudentList";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Student } from '../utils/students';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../context/store';
import { updateStudents } from '../context/action/studentSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const studentState = useSelector((state: RootState) => state.student);
  const [students, setStudents] = useState<Student[]>(studentState.students);
  const [classList, setClassList] = useState<Student[]>([]);

  useEffect(() => {
    setStudents(studentState.students);
  }, [studentState]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    let updatedStudents = [...students];
    let updatedClassList = [...classList];

    // Moving within the same list
    if (source.droppableId === destination.droppableId) {
      const items = Array.from(
        source.droppableId === 'studentList' ? updatedStudents : updatedClassList
      );
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      if (source.droppableId === 'studentList') {
        updatedStudents = items;
        setStudents(updatedStudents);
      } else {
        updatedClassList = items;
        setClassList(updatedClassList);
      }
    } else {
      // Moving between lists
      const sourceItems = Array.from(
        source.droppableId === 'studentList' ? updatedStudents : updatedClassList
      );
      const destinationItems = Array.from(
        destination.droppableId === 'studentList' ? updatedStudents : updatedClassList
      );

      const [movedItem] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, movedItem);

      if (source.droppableId === 'studentList') {
        updatedStudents = sourceItems;
        updatedClassList = destinationItems;
        setStudents(updatedStudents);
        setClassList(updatedClassList);
      } else {
        updatedClassList = sourceItems;
        updatedStudents = destinationItems;
        setClassList(updatedClassList);
        setStudents(updatedStudents);
      }
    }
    dispatch(updateStudents(updatedStudents));
  };

  return (
    <div className="flex flex-col dark:bg-slate-800 bg-slate-100 h-screen">
      <Sidetop />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex  justify-between">
          <ClassLists students={classList} />
          <StudentList students={students} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Header;