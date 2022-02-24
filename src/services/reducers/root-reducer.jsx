import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { modalReducer } from "./modal";
import { orderReducer } from "./order";
import { passwordReducer } from "./password";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  password: passwordReducer,
  user: userReducer
});
