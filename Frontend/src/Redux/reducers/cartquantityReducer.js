import * as actionType from "../constants/quantityConstants";
export const handleCartQuantityReducer = (
  state = { total_quantity: 0 },
  action
) => {
  switch (action.type) {
    case actionType.INCREMENT_QUANTITY:
      return { total_quantity: state.total_quantity + 1 };
    case actionType.DECREMENT_QUANTITY:
      return { total_quantity: state.total_quantity - 1 };
    case actionType.REMOVE_ALL_INSTANCES:
      return { total_quantity: state.total_quantity - action.payload };
    default:
      return state;
  }
};
