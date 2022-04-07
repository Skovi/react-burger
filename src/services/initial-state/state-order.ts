import {
  TOrder,
  TOrderInfo,
} from "../../types";

export type TStateOrder = {
  createOrder: null | TOrderInfo,
  currentBurger: null | TOrder,
  orderRequest: boolean,
  orderFailed: boolean,
  ordersLoaded: boolean,
  feedOrders: null | Array<TOrder>,
};

export const stateOrder: TStateOrder = {
  createOrder: null,
  currentBurger: null,
  orderRequest: false,
  orderFailed: false,
  ordersLoaded: false,
  feedOrders: null,
};
