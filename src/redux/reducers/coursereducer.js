const initialState = {
  courses: []
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        courses: [...state.courses, action.payload]
      };
    default:
      return state;
  }
}
