import { PayloadAction } from "@reduxjs/toolkit";
import { TOrders } from "../../types";

export const SOCKET_CREATE: 'SOCKET_CREATE' = 'SOCKET_CREATE';
export const SOCKET_SUCCESS: 'SOCKET_SUCCESS' = 'SOCKET_SUCCESS';
export const SOCKET_ERROR: 'SOCKET_ERROR' = 'SOCKET_ERROR';
export const SOCKET_CLOSED: 'SOCKET_CLOSED' = 'SOCKET_CLOSED';
export const SOCKET_CLOSE: 'SOCKET_CLOSE' = 'SOCKET_CLOSE';
export const SOCKET_GET_MESSAGE: 'SOCKET_GET_MESSAGE' = 'SOCKET_GET_MESSAGE';
export const SOCKET_SEND_MESSAGE: 'SOCKET_MESSAGE' = 'SOCKET_MESSAGE';

export const socketAllActions = {
	socketCreate: SOCKET_CREATE,
	socketClose: SOCKET_CLOSE,
	socketSendMessage: SOCKET_SEND_MESSAGE,
	onOpen: SOCKET_SUCCESS,
	onClose: SOCKET_CLOSED,
	onError: SOCKET_ERROR,
	onGetMessage: SOCKET_GET_MESSAGE,
};

export interface ISocketCreateAction {
  readonly type: typeof SOCKET_CREATE;
}

export interface ISocketCloseAction {
  readonly type: typeof SOCKET_CLOSE;
}

export interface ISocketSendMessageAction {
  readonly type: typeof SOCKET_SEND_MESSAGE;
}

export interface ISocketSuccessAction {
  readonly type: typeof SOCKET_SUCCESS;
  payload: PayloadAction
}

export interface ISocketErrorAction {
  readonly type: typeof SOCKET_ERROR;
  payload: PayloadAction
}

export interface ISocketClosedAction {
  readonly type: typeof SOCKET_CLOSED;
  payload: PayloadAction
}

export interface ISocketGetMessageAction {
  readonly type: typeof SOCKET_GET_MESSAGE;
  payload: TOrders
}

export type TSocketActions =
  | ISocketCreateAction
  | ISocketCloseAction
  | ISocketSendMessageAction
  | ISocketSuccessAction
  | ISocketErrorAction
  | ISocketClosedAction
  | ISocketGetMessageAction;
