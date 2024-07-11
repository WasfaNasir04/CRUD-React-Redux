import React from 'react';
import { useSelector } from 'react-redux';

const CourseList = () => {
  const courses = useSelector((state) => state.courses.courses);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
