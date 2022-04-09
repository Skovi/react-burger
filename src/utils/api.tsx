import { apiNorma } from "./constants";
import { getCookie } from "./functions";

const request = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status)
};

export const getProductsRequest = () => {
  return fetch(`${apiNorma.url}/ingredients`, {
    method: 'GET',
    headers: apiNorma.headers,
  })
    .then((res) => request(res))
};

export const addOrderRequest = (ingredients: Array<string>) => {
  return fetch(`${apiNorma.url}/orders`, {
    method: 'POST',
    headers: apiNorma.headers,
    body: JSON.stringify(
      { ingredients }
    ),
  })
    .then((res) => request(res))
};

//регистрация
export const signUpRequest = (state: {name: string, email: string, password: string}) => {
  return fetch(`${apiNorma.url}/auth/register`, {
    method: 'POST',
    headers: apiNorma.headers,
    body: JSON.stringify(
      {
        email: state.email,
        password: state.password,
        name: state.name,
      }
    ),
  })
    .then((res) => request(res))
};

//вход
export const signInRequest = (state: {email: string, password: string}) => {
  return fetch(`${apiNorma.url}/auth/login`, {
    method: 'POST',
    headers: apiNorma.headers,
    body: JSON.stringify(
      {
        email: state.email,
        password: state.password,
      }
    ),
  })
    .then((res) => request(res))
};

//выход
export const signOutRequest = () => {
  return fetch(`${apiNorma.url}/auth/logout`, {
    method: 'POST',
    headers: apiNorma.headers,
    body: JSON.stringify(
      { token: localStorage.getItem('refreshToken') }
    ),
  })
    .then((res) => request(res))
};

//получение данных о пользователе
export const getUserRequest = () => {
  return fetch(`${apiNorma.url}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      ...apiNorma.headers,
      Authorization: 'Bearer ' + getCookie('token'),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then((res) => request(res))
};

//обновление токена
export const refreshTokenRequest = () => {
  return fetch(`${apiNorma.url}/auth/token`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: apiNorma.headers,
    body: JSON.stringify(
      { token: localStorage.getItem('refreshToken') }
    ),
  })
    .then((res) => request(res))
};

//изменение данных пользователя
export const updateUserRequest = (state: {name: string, email: string, password: string}) => {
  return fetch(`${apiNorma.url}/auth/user`, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      ...apiNorma.headers,
      Authorization: 'Bearer ' + getCookie('token'),
    },
    body: JSON.stringify(
      {
        email: state.email,
        password: state.password,
        name: state.name,
      }
    ),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then((res) => request(res))
};

//восстановление пароля
export const forgotPasswordRequest = (email: string) => {
  return fetch(`${apiNorma.url}/password-reset`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: apiNorma.headers,
    body: JSON.stringify(
      { email }
    ),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then((res) => request(res))
};

//смена пароля
export const resetPasswordRequest = (state: {password: string, token: number}) => {
  return fetch(`${apiNorma.url}/password-reset/reset`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: apiNorma.headers,
    body: JSON.stringify(
      {
        password: state.password,
        token: state.token,
      }
    ),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then((res) => request(res))
};
