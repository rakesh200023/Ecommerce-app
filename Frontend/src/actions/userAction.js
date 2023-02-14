import { SIGNUP, USER_LOGIN, USER_LOGOUT } from "./types";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const userLogin = (values, history) => async (dispatch) => {
  console.log("actionnn");
  const res = await axios
    .get(`http://localhost:5000/data?email=${values.email}`)
    .catch((err) => console.log("err", err));
  console.log("actionnn ress", res.data);
  if (res.data.length === 0) {
    alert(" user not found...SIGNUP REQUIRED");
    return history.push("/signup");
  }
  if (res.data[0].password === values.password) {
    console.log("before disp");
    dispatch({
      type: USER_LOGIN,
      payload: res.data[0],
    });
    history.push("/home");
  } else if (res.data[0].password !== values.password) {
    return alert("invalid password");
  } else {
    console.log("res user loginnin", res);
  }
};

export const userLogout = () => (dispatch) => {
  console.log("inside logout action");
  dispatch({
    type: USER_LOGOUT,
    payload: "fa",
  });
};

export const signup = (values, history) => async (dispatch) => {
  const res = await axios
    .get(`http://localhost:5000/data?email=${values.email}`)
    .catch((err) => console.log("err", err));

  if (res.data.length > 0) {
    return alert("Email Id already exists!!!");
  }
  const res1 = axios
    .post("http://localhost:5000/data", values)
    .catch((err) => console.log("my add errror", err));
  alert("signup successfull...Login now");
  console.log("successfull", res1.data);
  history.push("/signin");
};
