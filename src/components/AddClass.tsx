import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClasselement } from '../context/action/ClassAction';
import { RootState } from '../context/store';

export default function AddClass() {
  const classes = useSelector((state: RootState) => state.class.classes);
  const dispatch = useDispatch();
  const [className, setClassName] = useState<string>('');
  const [classColor, setClassColor] = useState<string>('');

  const handleSubmit = () => {
    if (className && classColor) {
      const newId = new Date().getTime();
      dispatch(addClasselement({ id: newId, name: className, color: classColor, students: [] }));
      setClassName('');
      setClassColor('');
    }
    console.log('Added class:', classes);
  };

  return (
    <div className="w-96 mx-auto">
      <div className="mb-4">
        <label htmlFor="class" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Class Name
        </label>
        <input
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          type="text"
          id="class"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter class name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="color" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Class Color
        </label>
        <input
          value={classColor}
          onChange={(e) => setClassColor(e.target.value)}
          type="color"
          id="color"
          className="block w-1/2 h-10 p-1.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Class
      </button>
    </div>
  );
}