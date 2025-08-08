import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";

const appReducer = combineReducers({
  cart: cartReducer,
  search: searchReducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: any
) => {
  if (action.type === "RESET") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
