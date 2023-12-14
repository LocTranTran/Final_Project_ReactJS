// reducers/userReducer.js
const initialState = {
    username:'',
  loggedInUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN_USER":
      return {
        ...state,
        loggedInUser: action.payload,
          };
      case "CLEAR_USERNAME":
      return {
        ...state,
        username: "",
        loggedInUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
