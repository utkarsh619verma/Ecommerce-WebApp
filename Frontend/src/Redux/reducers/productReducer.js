import * as actionType from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionType.GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return { loader: true };
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return { loader: false, product: action.payload };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return { loader: false, error: action.payload };
    case actionType.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };
    default:
      return state;
  }
};
