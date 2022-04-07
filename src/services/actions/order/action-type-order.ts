import { 
  TOrder, 
  TOrderInfo,
 } from "../../../types";
import { 
  ICreateOrderFailedAction,
  IGetOrdersFailedAction,
  IGetUserOrdersFailedAction, 
} from "./action-creator-order";

export const CREATE_ORDER_REQUEST: 'CREATE_ORDER_REQUEST' = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS' = 'CREATE_ORDER_SUCCESS';

export const GET_ORDERS_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDERS_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';

export const GET_USER_ORDERS_REQUEST: 'GET_USER_ORDER_REQUEST' = 'GET_USER_ORDER_REQUEST';
export const GET_USER_ORDERS_SUCCESS: 'GET_USER_ORDER_SUCCESS' = 'GET_USER_ORDER_SUCCESS';


export interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface ICteateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  readonly order: TOrderInfo;
}

export interface IGetOrdersRequestAction {
  readonly type: typeof GET_ORDERS_REQUEST;
}

export interface IGetOrdersSuccessAction {
  readonly type: typeof GET_ORDERS_SUCCESS;
  readonly feedOrders: Array<TOrder>;
}

export interface IGetUserOrdersRequestAction {
  readonly type: typeof GET_USER_ORDERS_REQUEST;
  
}

export interface IGetUserOrdersSuccessAction {
  readonly type: typeof GET_USER_ORDERS_SUCCESS;
  readonly feedOrders: Array<TOrder>;
}

export type TOrderActions =
  | ICreateOrderFailedAction
  | ICreateOrderRequestAction
  | ICteateOrderSuccessAction
  | IGetOrdersFailedAction
  | IGetOrdersRequestAction
  | IGetOrdersSuccessAction
  | IGetUserOrdersFailedAction
  | IGetUserOrdersRequestAction
  | IGetUserOrdersSuccessAction;
