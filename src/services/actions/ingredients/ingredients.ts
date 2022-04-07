import { 
  TDispatch, 
  TThunk,
 } from '../../../types';
import { getProductsRequest } from '../../../utils/api';
import { getItemsFailed } from './action-creator-ingredients';
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS
} from './action-type-ingredients';

export const getIngredients: TThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    });
    getProductsRequest()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            items: res.data
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
