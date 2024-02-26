import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartitems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const item = action.payload;
      const exist = state.cartitems.find((element) => element._id === item._id);
      if (exist) {
        return {
          ...state,
          cartitems: state.cartitems.map((element) =>
            element.product === exist.product ? item : element
          ),
        };
      } else {
        return { ...state, cartitems: [...state.cartitems, item] };
      }
    }
    case actionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cartitems: state.cartitems.map(
          (element) => element._id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
