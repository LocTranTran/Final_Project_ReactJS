// authReducer.js
const initialState = {
  username: "",
  loggedInUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        username: "",
        loggedInUser: null,
      };
    case "CLEAR_USERNAME":
      return {
        ...state,
          username: "",
          loggedInUser: null
      };
    default:
      return state;
  }
};

export default authReducer;
