import { PayloadAction } from "@reduxjs/toolkit";
import { TOrders } from "../../types";

export const AUTH_SOCKET_CREATE: 'AUTH_SOCKET_CREATE' = 'AUTH_SOCKET_CREATE';
export const AUTH_SOCKET_SUCCESS: 'AUTH_SOCKET_SUCCESS' = 'AUTH_SOCKET_SUCCESS';
export const AUTH_SOCKET_ERROR: 'AUTH_SOCKET_ERROR' = 'AUTH_SOCKET_ERROR';
export const AUTH_SOCKET_CLOSED: 'AUTH_SOCKET_CLOSED' = 'AUTH_SOCKET_CLOSED';
export const AUTH_SOCKET_CLOSE: 'AUTH_SOCKET_CLOSE' = 'AUTH_SOCKET_CLOSE';
export const AUTH_SOCKET_GET_MESSAGE: 'AUTH_SOCKET_GET_MESSAGE' = 'AUTH_SOCKET_GET_MESSAGE';
export const AUTH_SOCKET_SEND_MESSAGE: 'AUTH_SOCKET_MESSAGE' = 'AUTH_SOCKET_MESSAGE';

export const authSocketAllActions = {
	socketCreate: AUTH_SOCKET_CREATE,
	socketClose: AUTH_SOCKET_CLOSE,
	socketSendMessage: AUTH_SOCKET_SEND_MESSAGE,
	onOpen: AUTH_SOCKET_SUCCESS,
	onClose: AUTH_SOCKET_CLOSED,
	onError: AUTH_SOCKET_ERROR,
	onGetMessage: AUTH_SOCKET_GET_MESSAGE,
};

export interface IAuthSocketCreateAction {
  readonly type: typeof AUTH_SOCKET_CREATE;
}

export interface IAuthSocketCloseAction {
  readonly type: typeof AUTH_SOCKET_CLOSE;
}

export interface IAuthSocketSendMessageAction {
  readonly type: typeof AUTH_SOCKET_SEND_MESSAGE;
}

export interface IAuthSocketSuccessAction {
  readonly type: typeof AUTH_SOCKET_SUCCESS;
  payload: PayloadAction
}

export interface IAuthSocketErrorAction {
  readonly type: typeof AUTH_SOCKET_ERROR;
  payload: PayloadAction
}

export interface IAuthSocketClosedAction {
  readonly type: typeof AUTH_SOCKET_CLOSED;
  payload: PayloadAction
}

export interface IAuthSocketGetMessageAction {
  readonly type: typeof AUTH_SOCKET_GET_MESSAGE;
  payload: TOrders
}

export type TAuthSocketActions =
  | IAuthSocketCreateAction
  | IAuthSocketCloseAction
  | IAuthSocketSendMessageAction
  | IAuthSocketSuccessAction
  | IAuthSocketErrorAction
  | IAuthSocketClosedAction
  | IAuthSocketGetMessageAction;
