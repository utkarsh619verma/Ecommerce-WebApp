import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";
import { handleCartQuantityReducer } from "./reducers/cartquantityReducer";
import { cartReducer } from "./reducers/cartReducer";

//Creating a persist Object

const persistConfig = {
  key: "root",
  storage,
  debug: true,
};

//Creating reducer object

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cartReducer: cartReducer,
  cartQuantity: handleCartQuantityReducer,
});

//Wrapping our root reducer(reducer in this case) with persistReducer

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistedStore = persistStore(store);

export { store, persistedStore };
