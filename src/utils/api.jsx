import { apiCreateOrger } from "./constants";

const request = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status)
};

export const getProducts = () => {
  return fetch(`${apiCreateOrger.url}/ingredients`, {
    method: 'GET',
    headers: apiCreateOrger.headers,
  })
    .then((res) => request(res))
};

export const addOrder = (ingredients) => {
  return fetch(`${apiCreateOrger.url}/orders`, {
    method: 'POST',
    headers: apiCreateOrger.headers,
    body: JSON.stringify(
      { ingredients }
    ),
  })
    .then((res) => request(res))
};
