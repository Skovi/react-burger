import {
  signUpRequest,
  signInRequest,
  signOutRequest,
  getUserRequest,
  refreshTokenRequest,
  updateUserRequest
} from "../../utils/api";
import { setCookie, deleteCookie } from "../../utils/functions";
import { 
  loginFailed, 
  redisterFailed, 
  logoutFailed, 
  getUserFailed, 
  refreshTokenFailed, 
  updateUserFailed, 
} from "./action-cteators/user";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

//регистрация
export const register = (state) => {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    signUpRequest(state)
      .then(data => {
        if (data.success) {
          const authToken = data.accessToken.split('Bearer ')[1];
          const refreshToken = data.refreshToken;
          setCookie('token', authToken, { 'max-age': 1200 });
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
export const login = (state) => {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    signInRequest(state)
      .then(data => {
        if (data.success) {
          const authToken = data.accessToken.split('Bearer ')[1];
          const refreshToken = data.refreshToken;
          setCookie('token', authToken, { 'max-age': 1200 });
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
export function logout() {
  return function (dispatch) {
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
export function getUser() {
  return function (dispatch) {
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
          console.log('ошибка в получении данных')
          dispatch(getUserFailed());
        }
      })
      .catch((err) => {
        if (err === 403) {
          dispatch(refreshToken());
        }
        dispatch(getUserFailed());
        console.log(err);
      });
  };
};

//обновление токена
export function refreshToken() {
  return function (dispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST,
    });
    refreshTokenRequest()
      .then(data => {
        if (data.success) {
          localStorage.setItem('refreshToken', data.refreshToken);
          const authToken = data.accessToken.split('Bearer ')[1];
          setCookie('token', authToken, { 'max-age': 1200 });
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
export function updateUser(state) {
  return function (dispatch) {
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
          dispatch(refreshToken(state));
        }
        dispatch(updateUserFailed());
      });
  };
};
