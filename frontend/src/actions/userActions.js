import {
  CLEAR_ERRORS,
  FAIL_USER_LOGIN,
  REQUEST_USER_LOGIN,
  SUCCESS_USER_LOGIN,
  USER_LOGOUT,
} from "../constants/userConstant";
import axios from "axios";

//login
export const login = (cred) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_USER_LOGIN });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/v1/login", cred, config);
    dispatch({
      type: SUCCESS_USER_LOGIN,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FAIL_USER_LOGIN,
      payload: error.response.data.message,
    });
  }
};

//logout
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
  } catch (error) {
    console.log(error);
  }
};

//logout
export const clearErrors = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_ERRORS });
  } catch (error) {
    console.log(error);
  }
};
