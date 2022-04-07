export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';
export const REGISTER_FAILED: 'REGISTER_FAILED' = 'REGISTER_FAILED';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';
export const REFRESH_TOKEN_FAILED: 'REFRESH_TOKEN_FAILED' = 'REFRESH_TOKEN_FAILED';
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED';

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

export interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}

export const redisterFailed = (): IRegisterFailedAction => {
  return {
    type: REGISTER_FAILED
  }
};

export const logoutFailed = (): ILogoutFailedAction => {
  return {
    type: LOGOUT_FAILED
  }
};

export const loginFailed = (): ILoginFailedAction => {
  return {
    type: LOGIN_FAILED
  }
};

export const getUserFailed = (): IGetUserFailedAction => {
  return {
    type: GET_USER_FAILED
  }
};

export const refreshTokenFailed = (): IRefreshTokenFailedAction => {
  return {
    type: REFRESH_TOKEN_FAILED
  }
};

export const updateUserFailed = (): IUpdateUserFailedAction => {
  return {
    type: UPDATE_USER_FAILED
  }
};
