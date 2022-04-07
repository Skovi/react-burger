import PropTypes from "prop-types";

export const menuItemPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

export const apiNorma = {
  url: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: "application/json"
  },
};

export const SOCKET_URL = 'wss://norma.nomoreparties.space/orders/all';
export const SOCKET_URL_USER = 'wss://norma.nomoreparties.space/orders';