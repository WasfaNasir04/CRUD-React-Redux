import React from 'react';
import CourseForm from './courseform';
import CourseList from './courselist';

const Admin = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default Admin;
