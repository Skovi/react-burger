import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { modalReducer } from "./modal";
import { orderReducer } from "./order";
import { passwordReducer } from "./password";
import { userReducer } from "./user";
import { SocketReducer } from './socket-reducer';
import { AuthSocketReducer } from './auth-socket-reducer';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  password: passwordReducer,
  user: userReducer,
  socket: SocketReducer,
  authSocket: AuthSocketReducer,
});
