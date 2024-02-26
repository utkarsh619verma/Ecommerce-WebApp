import axios from "axios";
import * as actionTypes from "../constants/cartConstants";
import { URL } from "../../../url";

export const AddtoCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + "/api/seller/product/" + id, {
      withCredentials: true,
    });
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_FAIL, payload: error.message });
  }
};

export const RemovefromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
