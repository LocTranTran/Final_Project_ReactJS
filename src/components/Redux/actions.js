// actions.js
export const setLoggedInUser = (username) => {
  return {
    type: "SET_LOGGED_IN_USER",
    payload: username,
  };
};
export const logout = () => ({
  type: 'LOGOUT',
});
// actions.js
export const clearUsername = () => {
  return {
    type: 'CLEAR_USERNAME',
  };
};
