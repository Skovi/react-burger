export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const forgotPasswordFailed = () => {
  return {
    type: FORGOT_PASSWORD_FAILED
  }
};

export const resetPasswordFailed = () => {
  return {
    type: RESET_PASSWORD_FAILED
  }
};
