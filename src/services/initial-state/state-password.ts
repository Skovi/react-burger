export type TStatePassword = {
  forgotPasswordRequest: boolean,
  forgotPasswordFailed: boolean,

  resetPasswordRequest: boolean,
  resetPasswordFailed: boolean,
};

export const statePassword: TStatePassword = {
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,
};
