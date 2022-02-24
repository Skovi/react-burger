import {
  forgotPasswordRequest,
  resetPasswordRequest
} from "../../utils/api";

import {
  forgotPasswordFailed,
  resetPasswordFailed
} from "./action-cteators/password";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';

//восстановление пароля
export function forgotPassword(email) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    forgotPasswordRequest(email)
      .then(data => {
        if (data.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          });
        } else {
          dispatch(forgotPasswordFailed());
        }
      })
      .catch((err) => {
        dispatch(forgotPasswordFailed());
        console.log(err);
      });
  };
};

//смена пароля
export function resetPassword(state) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    resetPasswordRequest(state)
      .then(data => {
        if (data.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          });
        } else {
          dispatch(resetPasswordFailed());
        }
      })
      .catch((err) => {
        dispatch(resetPasswordFailed());
        console.log(err);
      });
  };
};
