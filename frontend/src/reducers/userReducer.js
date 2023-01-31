import {
  REQUEST_USER_LOGIN,
  SUCCESS_USER_LOGIN,
  FAIL_USER_LOGIN,
  USER_LOGOUT,
  CLEAR_ERRORS,
} from "../constants/userConstant";
//login reducer
export const loginReducer = (
  state = { isLoggedIn: [], user: {}, token: {} },
  action
) => {
  switch (action.type) {
    case REQUEST_USER_LOGIN:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };

    case SUCCESS_USER_LOGIN:
      return {
        loading: false,
        user: action.payload.user,
        token: action.payload.access,
        isLoggedIn: true,
      };

    case FAIL_USER_LOGIN:
      return {
        ...state,
        loading: false,
        user: [],
        token: "",
        isLoggedIn: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        loading: false,
        user: [],
        token: "",
        isLoggedIn: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
