import React from 'react';
import { connect } from 'react-redux';
import CourseList from './CourseList';
import CourseForm from './courseform';

const RoleBasedAccess = ({ role }) => (
  <div>
    {role === 'admin' ? <CourseForm /> : <CourseList />}
  </div>
);

const mapStateToProps = (state) => ({
  role: state.user.role
});

export default connect(mapStateToProps)(RoleBasedAccess);
