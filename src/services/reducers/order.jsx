import { stateOrder } from "../../services/initial-state/state-order";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../actions/order";
import { CREATE_ORDER_FAILED } from "../actions/action-cteators/order";

export const orderReducer = (state = stateOrder, action) => {
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
        currentOrder: action.order,
        orderRequest: false
      };
    }

    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false
      };
    }

    default: {
      return state;
    }
  }
};
