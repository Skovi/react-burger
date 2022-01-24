import { addOrder } from '../../utils/api';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export const createOrder = (ingredients_id) => {
  return function (dispatch) {
    dispatch({
      type: CREATE_ORDER_REQUEST
    });
    addOrder(ingredients_id).then((res) => {
      if (res && res.success) {
        dispatch({
          type: CREATE_ORDER_SUCCESS,
          order: res
        });
      } else {
        dispatch({
          type: CREATE_ORDER_FAILED
        });
      }
    }).catch(err => {
      console.log(err)
      dispatch({
        type: CREATE_ORDER_FAILED
      });
    })
  };
};