export const FETCH_COURSES = 'FETCH_COURSES';
export const ADD_COURSE = 'ADD_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';

export const fetchCourses = (courses) => ({
  type: FETCH_COURSES,
  payload: courses
});

export const addCourse = (course) => ({
  type: ADD_COURSE,
  payload: course
});

export const updateCourse = (course) => ({
  type: UPDATE_COURSE,
  payload: course
});

export const deleteCourse = (id) => ({
  type: DELETE_COURSE,
  payload: id
});
