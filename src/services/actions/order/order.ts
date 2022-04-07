import {
  addOrderRequest,
  getOrdersUserRequest,
  getOrdersAllRequest,
} from '../../../utils/api';
import {
  createOrderFailed,
  getOrdersFailedAction,
  getUserOrdersFailedAction,
} from './action-creator-order';
import { CLEAR_CONSTRUCTOR } from "../ingredients/action-type-ingredients";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
} from './action-type-order';
import { 
  TDispatch, 
  TThunk,
 } from '../../../types';

export const createOrder: TThunk = (ingredients_id: Array<string>) => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: CREATE_ORDER_REQUEST
    });
    addOrderRequest(ingredients_id).then((res) => {
      if (res && res.success) {
        dispatch({
          type: CREATE_ORDER_SUCCESS,
          order: res
        });
        dispatch({ type: CLEAR_CONSTRUCTOR });
      } else {
        dispatch(createOrderFailed());
      }
    }).catch(err => {
      console.log(err)
      dispatch(createOrderFailed());
    })
  };
};

export const getOrders: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_ORDERS_REQUEST,
    });
    getOrdersAllRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDERS_SUCCESS,
            feedOrders: res.orders,
          });
        } else {
          dispatch(getOrdersFailedAction());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(getOrdersFailedAction());
      });
  };
};

export const getUserOrders: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_USER_ORDERS_REQUEST,
    });
    getOrdersUserRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_ORDERS_SUCCESS,
            feedOrders: res.orders,
          });
        } else {
          dispatch(getUserOrdersFailedAction());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(getUserOrdersFailedAction());
      });
  };
};
