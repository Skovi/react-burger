import { 
  TDispatch, 
  TThunk,
 } from "../../../types";
import {
  signUpRequest,
  signInRequest,
  signOutRequest,
  getUserRequest,
  refreshTokenRequest,
  updateUserRequest
} from "../../../utils/api";

import { 
  setCookie, 
  deleteCookie,
  getCookie,
} from "../../../utils/functions";

import { 
  loginFailed, 
  redisterFailed, 
  logoutFailed, 
  getUserFailed, 
  refreshTokenFailed, 
  updateUserFailed, 
} from "./action-creator-user";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./action-type-user";

//регистрация
export const register: TThunk = (state: {name: string, email: string, password: string}) => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    signUpRequest(state)
      .then(data => {
        if (data.success) {
          const authToken = data.accessToken.split('Bearer ')[1];
          const refreshToken = data.refreshToken;
          setCookie('token', authToken);
          localStorage.setItem('refreshToken', refreshToken);
          dispatch({
            type: REGISTER_SUCCESS,
            user: data.user,
          });
        } else {
          dispatch(redisterFailed());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(redisterFailed());
      });
  };
};

//вход
export const login: TThunk = (state: {email: string, password: string}) => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    signInRequest(state)
      .then(data => {
        if (data.success) {
          const authToken = data.accessToken.split('Bearer ')[1];
          const refreshToken = data.refreshToken;
          setCookie('token', authToken);
          localStorage.setItem('refreshToken', refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            user: data.user,
          });
        } else {
          dispatch(loginFailed());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailed());
      });
  };
};

//выход 
export const logout: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    signOutRequest()
      .then(data => {
        if (data.success) {
          deleteCookie('token');
          localStorage.removeItem('refreshToken');
          dispatch({
            type: LOGOUT_SUCCESS,
          });
        } else {
          dispatch(logoutFailed());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(logoutFailed());
      });
  };
};

//получение данных о пользователе
export const getUser: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getUserRequest()
      .then(data => {
        if (data.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: data.user,
          });
        } else {
          throw data;
        }
      })
      .catch((err) => {
        dispatch(getUserFailed());
        console.log(err);
      });
  };
};

//обновление токена
export const refreshToken: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST,
    });
    refreshTokenRequest()
      .then(data => {
        if (data.success) {
          localStorage.setItem('refreshToken', data.refreshToken);
          const authToken = data.accessToken.split('Bearer ')[1];
          setCookie('token', authToken);
          dispatch({
            type: REFRESH_TOKEN_SUCCESS,
          });
        } else {
          dispatch(refreshTokenFailed());
        }
      })
      .catch((err) => {
        console.log(err);
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        dispatch(refreshTokenFailed())
      });
  };
};

//изменение данных пользователя
export const updateUser: TThunk = (state: {name: string, email: string, password: string}) => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    updateUserRequest(state)
      .then(data => {
        if (data.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: data.user,
          });
        } else {
          dispatch(updateUserFailed());
        }
      })
      .catch((err) => {
        if (err === 403) {
          // dispatch(refreshToken());
        }
        dispatch(updateUserFailed());
      });
  };
};
