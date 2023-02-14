import { combineReducers } from "redux";
import { getProducts } from "./productReducer";
import { userLogin, userLogout } from "./userReducer";

export default combineReducers({
  user: userLogin,
  products: getProducts,
  // userLogout,
});
