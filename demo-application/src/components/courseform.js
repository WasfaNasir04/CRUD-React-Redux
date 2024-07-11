import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse, updateCourse, deleteCourse } from '../redux/actions/courseactions';

const CourseForm = ({ addCourse, updateCourse, deleteCourse, courses }) => {
  const [course, setCourse] = useState({ id: '', name: '' });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course.id) {
      updateCourse(course);
    } else {
      addCourse({ ...course, id: Date.now() });
    }
    setCourse({ id: '', name: '' });
  };

  const handleEdit = (course) => {
    setCourse(course);
  };

  const handleDelete = (id) => {
    deleteCourse(id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={course.name}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => handleEdit(course)}>Edit</button>
            <button onClick={() => handleDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.course.courses
});

const mapDispatchToProps = {
  addCourse,
  updateCourse,
  deleteCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);
