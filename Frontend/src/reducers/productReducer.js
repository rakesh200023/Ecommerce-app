import { DELETE_PRODUCT, GET_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
};
export const getProducts = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: [...action.payload] };
    default:
      return state;
  }
};
