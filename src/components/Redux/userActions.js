// actions/userActions.js

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_USERNAME,
} from "./userActionTypes";
import api from "../api"; // Import module để gọi API

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};
export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await api.login(credentials);
      const user = response.data;
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};
