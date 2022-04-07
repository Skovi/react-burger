import { statePassword } from "../initial-state/state-password";
import { passwordReducer } from "./password";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from '../actions/password/action-type-password';
import {
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_FAILED,
} from "../actions/password/action-creator-password";

describe('passwordReducer', () => {
  it('должен вернуть начальное состояние', () => {
    expect(passwordReducer(undefined, {})).toEqual(statePassword)
  })

  it('должен обработать FORGOT_PASSWORD_REQUEST', () => {
    expect(
      passwordReducer(statePassword, {
        type: FORGOT_PASSWORD_REQUEST
      })
    ).toEqual(expect.objectContaining({
      forgotPasswordRequest: true,
    }))
  })

  it('должен обработать FORGOT_PASSWORD_SUCCESS', () => {
    expect(
      passwordReducer(statePassword, {
        type: FORGOT_PASSWORD_SUCCESS
      })
    ).toEqual(expect.objectContaining({
      forgotPasswordFailed: false,
      forgotPasswordRequest: false,
    }))
  })

  it('должен обработать FORGOT_PASSWORD_FAILED', () => {
    expect(
      passwordReducer(statePassword, {
        type: FORGOT_PASSWORD_FAILED
      })
    ).toEqual(expect.objectContaining({
      forgotPasswordFailed: true,
      forgotPasswordRequest: false,
    }))
  })

  it('должен обработать RESET_PASSWORD_REQUEST', () => {
    expect(
      passwordReducer(statePassword, {
        type: RESET_PASSWORD_REQUEST
      })
    ).toEqual(expect.objectContaining({
      resetPasswordRequest: true,
    }))
  })

  it('должен обработать RESET_PASSWORD_SUCCESS', () => {
    expect(
      passwordReducer(statePassword, {
        type: RESET_PASSWORD_SUCCESS
      })
    ).toEqual(expect.objectContaining({
      resetPasswordFailed: false,
      resetPasswordRequest: false,
    }))
  })

  it('должен обработать RESET_PASSWORD_FAILED', () => {
    expect(
      passwordReducer(statePassword, {
        type: RESET_PASSWORD_FAILED
      })
    ).toEqual(expect.objectContaining({
      resetPasswordFailed: true,
      resetPasswordRequest: false,
    }))
  })
});
