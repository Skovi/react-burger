export const FORGOT_PASSWORD_FAILED: 'FORGOT_PASSWORD_FAILED' = 'FORGOT_PASSWORD_FAILED';
export const RESET_PASSWORD_FAILED: 'RESET_PASSWORD_FAILED' = 'RESET_PASSWORD_FAILED';

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export const forgotPasswordFailed = (): IForgotPasswordFailedAction => {
  return {
    type: FORGOT_PASSWORD_FAILED
  }
};

export const resetPasswordFailed = (): IResetPasswordFailedAction => {
  return {
    type: RESET_PASSWORD_FAILED
  }
};
