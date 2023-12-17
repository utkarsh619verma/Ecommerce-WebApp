import axios from "axios";
import { URL } from "../../../url";
import * as actionTypes from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    console.log("inside action");
    const res = await axios.get(URL + "/api/seller/product/products", {
      withCredentials: true,
    });
    console.log(res);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, value: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, value: error });
  }
};
