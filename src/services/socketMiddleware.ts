import {
  AnyAction,
  MiddlewareAPI,
} from "redux";
import { getCookie } from "../utils/functions";
import {
  TSocketAllActions,
} from "../types";

export const socketMiddleware = (
  wsUrl: string, 
  socketActions: TSocketAllActions, 
  auth: boolean
  ) => (store: MiddlewareAPI) => {
    
  let socket: WebSocket | null = null;

  let connected = false;

  return (next: (action: AnyAction) => void) => (action: AnyAction) => {
    const { dispatch } = store;

    const { type, payload } = action;

    const {
      socketCreate,
      socketClose,
      socketSendMessage,
      onOpen,
      onClose,
      onError,
      onGetMessage,
    } = socketActions;

    const token = auth ? getCookie('token') : null;

    if (type === socketCreate) {
      socket = token
        ? new WebSocket(`${wsUrl}?token=${token}`)
        : new WebSocket(`${wsUrl}`);
    };

    if (socket) {
      connected = true;

      socket.onopen = event => {
        dispatch({ type: onOpen, payload: event });
      };

      socket.onerror = event => {
        dispatch({ type: onError, payload: event });
      };

      socket.onmessage = event => {
        const { data } = event;
        const parsedData = JSON.parse(data);
        const { success, ...restParsedData } = parsedData;
        dispatch({ type: onGetMessage, payload: restParsedData });
      };

      socket.onclose = event => {
        dispatch({ type: onClose, payload: event });
        console.log('socket closed with code: ', event.code);
        if (!connected) {
          setTimeout(() => { dispatch({ type: socketCreate }) }, 100)
        };
      };

      if (socketClose && type === socketClose && socket) {
        socket.close(1000, 'socket closed');
        connected = false;
      };

      if (socketSendMessage && type === socketSendMessage && socket) {
        const message = token ? { ...payload, token } : { ...payload };
        socket.send(JSON.stringify(message));
      };
    };

    next(action);
  };
};
