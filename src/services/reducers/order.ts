import {
  stateOrder,
  TStateOrder,
} from "../initial-state/state-order";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
  TOrderActions,
} from "../actions/order/action-type-order";
import {
  CREATE_ORDER_FAILED,
  GET_ORDERS_FAILED,
  GET_USER_ORDERS_FAILED,
} from "../actions/order/action-creator-order";

export const orderReducer = (state = stateOrder, action: TOrderActions): TStateOrder => {
  switch (action.type) {

    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }

    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        createOrder: action.order,
        orderRequest: false,
      };
    }

    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }

    case GET_ORDERS_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
        ordersLoaded: false,
      };
    }
    case GET_ORDERS_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        feedOrders: action.feedOrders,
        orderRequest: false,
        ordersLoaded: true,
      };
    }
    case GET_ORDERS_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }

    case GET_USER_ORDERS_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
        ordersLoaded: false,
      };
    }

    case GET_USER_ORDERS_SUCCESS: {
      const data = action.feedOrders ? action.feedOrders : null
      return {
        ...state,
        orderFailed: false,
        feedOrders: data,
        orderRequest: false,
        ordersLoaded: true,
      };
    }
    case GET_USER_ORDERS_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
    }

    default: {
      return state;
    }
  }
};
