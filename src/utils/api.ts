import { apiNorma } from "./constants";
import { 
  deleteCookie, 
  getCookie, 
  setCookie,
 } from "./functions";

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

const fetchWithRefreshToken = (url: string, options: RequestInit) => {
  return fetch(url, options)
    .catch((res: Response) => {
      return res.json()
        .then((err) => {
          console.log(err)
          if (err === 403) {
            return refreshTokenRequest()
              .then(res => {
                localStorage.setItem('refreshToken', res.refreshToken);
                const authToken = res.accessToken.split('Bearer ')[1];
                setCookie('token', authToken);
                (options.headers as { [key: string]: string }).Authorization = res.accessToken
                return fetch(url, options).then((res) => request(res));
              })
          } else {
            deleteCookie('token');
            localStorage.removeItem('refreshToken');
            // eslint-disable-next-line
            location.reload();
            return Promise.reject(err)
          };
        })
    })
};

export const addOrderRequest = (ingredients: Array<string>) => {
  return fetchWithRefreshToken(`${apiNorma.url}/orders`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      ...apiNorma.headers,
      Authorization: 'Bearer ' + getCookie('token'),
    },
    body: JSON.stringify(
      { ingredients }
    ),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then((res) => request(res))
};

//регистрация
export const signUpRequest = (state: { name: string, email: string, password: string }) => {
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
export const signInRequest = (state: { email: string, password: string }) => {
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
  return fetchWithRefreshToken(`${apiNorma.url}/auth/user`, {
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
export const updateUserRequest = (state: { name: string, email: string, password: string }) => {
  return fetchWithRefreshToken(`${apiNorma.url}/auth/user`, {
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
export const resetPasswordRequest = (state: { password: string, token: string }) => {
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

export const getOrdersUserRequest = () => {
  return fetchWithRefreshToken(`${apiNorma.url}/orders`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      ...apiNorma.headers,
      Authorization: 'Bearer ' + getCookie('token')
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then((res) => request(res))
};

export const getOrdersAllRequest = () => {
  return fetch(`${apiNorma.url}/orders/all`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: apiNorma.headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then((res) => request(res))
};