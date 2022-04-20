import { userReducer } from "./user";
import { stateUser } from "../initial-state/state-user";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../actions/user/action-type-user";
import {
  LOGOUT_FAILED,
  LOGIN_FAILED,
  REGISTER_FAILED,
  GET_USER_FAILED,
  REFRESH_TOKEN_FAILED,
  UPDATE_USER_FAILED,
} from "../actions/user/action-creator-user";

describe('userReducer', () => {
  it('должен вернуть начальное состояние', () => {
    expect(userReducer(undefined, {})).toEqual(stateUser)
  })

  it('должен обработать REGISTER_REQUEST', () => {
    expect(
      userReducer(stateUser, {
        type: REGISTER_REQUEST
      })
    ).toEqual(expect.objectContaining({
      registerRequest: true,
      registerFailed: false,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать REGISTER_SUCCESS', () => {
    expect(
      userReducer(stateUser, {
        type: REGISTER_SUCCESS,
        user: {
          name: 'Test',
          email: 'test@test.ts'
        },
      })
    ).toEqual(expect.objectContaining({
      isAuth: true, 
      registerRequest: false,
      registerFailed: false,
      user: {
        name: 'Test',
        email: 'test@test.ts'
      }
    }))
  })

  it('должен обработать REGISTER_FAILED', () => {
    expect(
      userReducer(stateUser, {
        type: REGISTER_FAILED
      })
    ).toEqual(expect.objectContaining({
      registerRequest: false,
      registerFailed: true,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать LOGIN_REQUEST', () => {
    expect(
      userReducer(stateUser, {
        type: LOGIN_REQUEST
      })
    ).toEqual(expect.objectContaining({
      loginRequest: true,
      loginFailed: false,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать LOGIN_SUCCESS', () => {
    expect(
      userReducer(stateUser, {
        type: LOGIN_SUCCESS,
        user: {
          name: 'Test',
          email: 'test@test.ts'
        },
      })
    ).toEqual(expect.objectContaining({
      loginRequest: false,
      loginFailed: false,
      isAuth: true,
      user: {
        name: 'Test',
        email: 'test@test.ts'
      }
    }))
  })

  it('должен обработать LOGIN_FAILED', () => {
    expect(
      userReducer(stateUser, {
        type: LOGIN_FAILED
      })
    ).toEqual(expect.objectContaining({
      loginRequest: false,
      loginFailed: true,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать LOGOUT_REQUEST', () => {
    expect(
      userReducer(stateUser, {
        type: LOGOUT_REQUEST
      })
    ).toEqual(expect.objectContaining({
      logoutRequest: true,
      logoutFailed: false,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать LOGOUT_SUCCESS', () => {
    expect(
      userReducer(stateUser, {
        type: LOGOUT_SUCCESS,
        user: {
          name: 'Test',
          email: 'test@test.ts'
        },
      })
    ).toEqual(stateUser)
  })

  it('должен обработать LOGOUT_FAILED', () => {
    expect(
      userReducer(stateUser, {
        type: LOGOUT_FAILED
      })
    ).toEqual(expect.objectContaining({
      logoutFailed: true,
      logoutRequest: false,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать GET_USER_REQUEST', () => {
    expect(
      userReducer(stateUser, {
        type: GET_USER_REQUEST
      })
    ).toEqual(expect.objectContaining({
      getUserRequest: true,
      getUserFailed: false,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать GET_USER_SUCCESS', () => {
    expect(
      userReducer(stateUser, {
        type: GET_USER_SUCCESS,
        user: {
          name: 'Test',
          email: 'test@test.ts'
        },
      })
    ).toEqual(expect.objectContaining({
      isAuth: true, 
      getUserRequest: false,
        getUserFailed: false,
      user: {
        name: 'Test',
        email: 'test@test.ts'
      }
    }))
  })

  it('должен обработать GET_USER_FAILED', () => {
    expect(
      userReducer(stateUser, {
        type: GET_USER_FAILED
      })
    ).toEqual(expect.objectContaining({
      getUserRequest: false,
      getUserFailed: true,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать REFRESH_TOKEN_REQUEST', () => {
    expect(
      userReducer(stateUser, {
        type: REFRESH_TOKEN_REQUEST
      })
    ).toEqual(stateUser)
  })

  it('должен обработать REFRESH_TOKEN_SUCCESS', () => {
    expect(
      userReducer(stateUser, {
        type: REFRESH_TOKEN_SUCCESS
      })
    ).toEqual(expect.objectContaining({
      isTokenUpdated: true,
      tokenUpdateDate: true,
      isAuth: true
    }))
  })

  it('должен обработать REFRESH_TOKEN_FAILED', () => {
    expect(
      userReducer(stateUser, {
        type: REFRESH_TOKEN_FAILED
      })
    ).toEqual(expect.objectContaining({
      isTokenUpdated: true,
      tokenUpdateDate: false
    }))
  })

  it('должен обработать UPDATE_USER_REQUEST', () => {
    expect(
      userReducer(stateUser, {
        type: UPDATE_USER_REQUEST
      })
    ).toEqual(expect.objectContaining({
      updateUserRequest: true,
      updateUserFailed: false,
      user: {
        email: "", 
        name: ""
      }
    }))
  })

  it('должен обработать UPDATE_USER_SUCCESS', () => {
    expect(
      userReducer(stateUser, {
        type: UPDATE_USER_SUCCESS,
        user: {
          name: 'Test',
          email: 'test@test.ts'
        },
      })
    ).toEqual(expect.objectContaining({
      isAuth: true, 
      updateUserFailed: false,
      updateUserRequest: false,
      user: {
        name: 'Test',
        email: 'test@test.ts'
      }
    }))
  })

  it('должен обработать UPDATE_USER_FAILED', () => {
    expect(
      userReducer(stateUser, {
        type: UPDATE_USER_FAILED
      })
    ).toEqual(expect.objectContaining({
      updateUserFailed: true,
      updateUserRequest: false,
      user: {
        email: "", 
        name: ""
      }
    }))
  })
})