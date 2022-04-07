import {
  TStateSocket,
  stateSocket,
} from "../initial-state/state-socket";
import { TSocketActions } from '../actions/socket-actions'
import {
  SOCKET_SUCCESS,
  SOCKET_ERROR,
  SOCKET_CLOSED,
  SOCKET_GET_MESSAGE,
} from "../actions/socket-actions";

export const SocketReducer = (state = stateSocket, action: TSocketActions): TStateSocket => {
  switch (action.type) {
    case SOCKET_SUCCESS:
      return {
        ...state,
        isConnected: true
      };

    case SOCKET_ERROR:
      return {
        ...state,
        hasError: action.payload,
        isConnected: false
      };

    case SOCKET_CLOSED:
      return {
        ...state,
        isConnected: false
      };

    case SOCKET_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      };

    default:
      return state;
  }
};
