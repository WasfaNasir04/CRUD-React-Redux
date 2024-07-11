import React from 'react';
import { connect } from 'react-redux';

const CourseList = ({ courses }) => (
  <ul>
    {courses.map(course => (
      <li key={course.id}>{course.name}</li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  courses: state.course.courses
});

export default connect(mapStateToProps)(CourseList);
