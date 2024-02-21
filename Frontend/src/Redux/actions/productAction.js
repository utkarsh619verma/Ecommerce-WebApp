import axios from "axios";
import { URL } from "../../../url";
import * as actionTypes from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(URL + "/api/seller/product/products", {
      withCredentials: true,
    });
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    const data = await axios.get(URL + "/api/seller/product/" + id, {
      withCredentials: true,
    });
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error });
  }
};
