export const stateUser = {
  user: {
    name: '',
    email: '',
  },

  isAuth: false,

  //обновление токена
  isTokenUpdated: false,
  tokenUpdateDate: null,

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
