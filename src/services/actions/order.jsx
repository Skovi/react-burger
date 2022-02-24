import { addOrderRequest } from '../../utils/api';
import { createOrderFailed } from './action-cteators/order';
import { CLEAR_CONSTRUCTOR } from './ingredients';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';

export const createOrder = (ingredients_id) => {
  console.log(ingredients_id)
  return function (dispatch) {
    dispatch({
      type: CREATE_ORDER_REQUEST
    });
    addOrderRequest(ingredients_id).then((res) => {
      if (res && res.success) {
        dispatch({
          type: CREATE_ORDER_SUCCESS,
          order: res
        });
        dispatch({ type: CLEAR_CONSTRUCTOR });
      } else {
        dispatch(createOrderFailed());
      }
    }).catch(err => {
      console.log(err)
      dispatch(createOrderFailed());
    })
  };
};
