import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../redux/actions/courseactions';

const CourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse({ id: Date.now(), name: courseName }));
    setCourseName('');
  };

  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Course Name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CourseForm;
