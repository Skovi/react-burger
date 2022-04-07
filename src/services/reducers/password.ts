import {
  statePassword,
  TStatePassword,
} from "../initial-state/state-password";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  TPasswordActions,
} from '../actions/password/action-type-password';
import {
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_FAILED,
} from "../actions/password/action-creator-password";

export const passwordReducer = (state = statePassword, action: TPasswordActions): TStatePassword => {
  switch (action.type) {
    //восстановление пароля
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordFailed: false,
        forgotPasswordRequest: false,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordFailed: true,
        forgotPasswordRequest: false,
      };
    }
    //смена пароля
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordFailed: false,
        resetPasswordRequest: false,

      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordFailed: true,
        resetPasswordRequest: false,

      };
    }
    default: {
      return state;
    }
  }
};
