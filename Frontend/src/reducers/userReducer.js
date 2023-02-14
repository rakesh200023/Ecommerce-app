import { SIGNUP, USER_LOGIN, USER_LOGOUT } from "../actions/types";
const initialState = {
  isLogin: false,
  user: {},
};
export const userLogin = (state = initialState, action) => {
  console.log("afte inside red disp", action);
  switch (action.type) {
    case USER_LOGIN: {
      console.log("iside swit", state);
      return { ...state, user: action.payload, isLogin: true };
    }
    case USER_LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};
