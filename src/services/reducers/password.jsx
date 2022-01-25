import { statePassword } from "../../services/initial-state/state-password";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../actions/password";
import {
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_FAILED,
} from "../actions/action-cteators/password";

export const passwordReducer = (state = statePassword, action) => {
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
        forgotPassword: action.forgotPassword,
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
        resetPassword: action.resetPassword,
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
