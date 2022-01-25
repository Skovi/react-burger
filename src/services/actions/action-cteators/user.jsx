
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const redisterFailed = () => {
  return {
    type: REGISTER_FAILED
  }
};

export const logoutFailed = () => {
  return {
    type: LOGOUT_FAILED
  }
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED
  }
};

export const getUserFailed = () => {
  return {
    type: GET_USER_FAILED
  }
};

export const refreshTokenFailed = () => {
  return {
    type: REFRESH_TOKEN_FAILED
  }
};

export const updateUserFailed = () => {
  return {
    type: UPDATE_USER_FAILED
  }
};
