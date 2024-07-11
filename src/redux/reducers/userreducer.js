const initialState = {
    role: 'user' // Change this to 'admin' for admin access
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default userReducer;
  