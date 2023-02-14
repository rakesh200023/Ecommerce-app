import axios from "axios";
import { GET_PRODUCTS } from "./types";
export const getProducts = () => async (dispatch) => {
  const res = await axios
    .get("http://localhost:5000/products")
    .catch((err) => console.log("err", err));
  console.log("action prodd", res.data);
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data,
  });
};

export const deleteProduct = (id) => async (dispatch) => {
  await axios
    .delete(`http://localhost:5000/products/${id}`)
    .then((res) => console.log("deleted", res))
    .catch((err) => console.log("err delete", err));
};
