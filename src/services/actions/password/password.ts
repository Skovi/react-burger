import { 
  TDispatch, 
  TThunk,
 } from "../../../types";
import {
  forgotPasswordRequest,
  resetPasswordRequest
} from "../../../utils/api";

import {
  forgotPasswordFailed,
  resetPasswordFailed
} from "./action-creator-password";

import { 
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS
 } from "./action-type-password";


//восстановление пароля
export const forgotPassword: TThunk = (email: string) => {
  return function (dispatch: TDispatch) {
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
export const resetPassword: TThunk = (state: { password: string, token: string}) => {
  return function (dispatch: TDispatch) {
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
