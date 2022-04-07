export type TStateUser = {
  user: {
    name: string,
    email: string,
  },

  isAuth: boolean,

  isTokenUpdated: boolean,
  tokenUpdateDate: boolean,

  registerRequest: boolean,
  registerFailed: boolean,

  loginRequest: boolean,
  loginFailed: boolean,

  logoutRequest: boolean,
  logoutFailed: boolean,

  updateUserRequest: boolean,
  updateUserFailed: boolean,

  getUserRequest: boolean,
  getUserFailed: boolean,
};

export const stateUser: TStateUser = {
  user: {
    name: '',
    email: '',
  },

  isAuth: false,

  //обновление токена
  isTokenUpdated: false,
  tokenUpdateDate: false,

  //регистрация
  registerRequest: false,
  registerFailed: false,

  //вход
  loginRequest: false,
  loginFailed: false,

  //выход
  logoutRequest: false,
  logoutFailed: false,

  //изменение данных пользователя
  updateUserRequest: false,
  updateUserFailed: false,

  //получение данных о пользователе
  getUserRequest: false,
  getUserFailed: false,
};
