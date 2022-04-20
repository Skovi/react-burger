import { 
  TStateAuthSocket, 
  stateAuthSocket,
 } from "../initial-state/state-auth-socket"; 
import { TAuthSocketActions } from "../actions/auth-socket-actions";
import { 
  AUTH_SOCKET_SUCCESS,
  AUTH_SOCKET_ERROR,
  AUTH_SOCKET_CLOSED,
  AUTH_SOCKET_GET_MESSAGE,
} from "../actions/auth-socket-actions";

export const AuthSocketReducer = (state = stateAuthSocket, action: TAuthSocketActions): TStateAuthSocket => {
  switch (action.type) {
    case AUTH_SOCKET_SUCCESS:
      return {
        ...state,
        isConnected: true
      };

    case AUTH_SOCKET_ERROR:
      return {
        ...state,
        hasError: action.payload,
        isConnected: false
      };

    case AUTH_SOCKET_CLOSED:
      return {
        ...state,
        isConnected: false
      };

    case AUTH_SOCKET_GET_MESSAGE:
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
