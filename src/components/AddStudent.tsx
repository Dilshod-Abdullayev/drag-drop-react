import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentElement } from '../context/action/studentSlice';

const AddStudent: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('male');

  const handleSubmit = () => {
    if (name && age) {
      const newId = new Date().getTime()
      dispatch(addStudentElement({ id: newId, name, age: Number(age), male: gender }));
      setName('');
      setAge('');
      setGender('male');
    }
  };

  return (
    <div className="w-96 mx-auto">
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Student Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter student name"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Student Age
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter student age"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Gender
        </label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </div>
  );
};

export default AddStudent;
