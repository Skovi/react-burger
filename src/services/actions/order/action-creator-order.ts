export const CREATE_ORDER_FAILED: 'CREATE_ORDER_FAILED' = 'CREATE_ORDER_FAILED';
export const GET_ORDERS_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const GET_USER_ORDERS_FAILED: 'GET_USER_ORDER_FAILED' = 'GET_USER_ORDER_FAILED';

export interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED
}

export interface IGetOrdersFailedAction {
  readonly type: typeof GET_ORDERS_FAILED
}

export interface IGetUserOrdersFailedAction {
  readonly type: typeof GET_USER_ORDERS_FAILED
}

export const createOrderFailed = (): ICreateOrderFailedAction => {
  return {
    type: CREATE_ORDER_FAILED
  }
};

export const getOrdersFailedAction = (): IGetOrdersFailedAction => {
  return {
    type: GET_ORDERS_FAILED
  }
};

export const getUserOrdersFailedAction = (): IGetUserOrdersFailedAction => {
  return {
    type: GET_USER_ORDERS_FAILED
  }
};