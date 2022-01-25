import { getProductsRequest } from '../../utils/api';
import { filterArray } from '../../utils/functions';
import { getItemsFailed } from './action-cteators/ingredients';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_CONSTRUCTOR = 'UPDATE_CONSTRUCTOR';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export const TAB_SWITCH = 'TAB_SWITCH';

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    });
    getProductsRequest()
      .then((res) => {
        const ingredients = filterArray(res.data);
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            items: ingredients
          });
        } else {
          dispatch(getItemsFailed());
        }
      }).catch(err => {
        console.log(err);
        dispatch(getItemsFailed())
      });
  };
};
