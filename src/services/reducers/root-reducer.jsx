import { combineReducers } from 'redux';
import { ingredientsReducer } from "./items";
import { modalReducer } from "./modal";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  items: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
});
