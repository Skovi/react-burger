import { getProducts } from '../../utils/api';
import { filterArray } from '../../utils/functions';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const CURRENT_BURGER = 'CURRENT_BURGER';
export const UPDATE_CONSTRUCTOR = 'UPDATE_CONSTRUCTOR';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export const TAB_SWITCH = 'TAB_SWITCH';

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    });
    getProducts().then((res) => {
      const ingredients = filterArray(res.data);
      if (res && res.success) {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: ingredients
        });
      } else {
        dispatch({
          type: GET_ITEMS_FAILED
        });
      }
    }).catch(err => {
      console.log(err);
      dispatch({
        type: GET_ITEMS_FAILED
      })
    });
  };
};
