import {
  stateUser,
  TStateUser,
} from "../initial-state/state-user";
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
  TUserActions,
} from "../actions/user/action-type-user";
import {
  LOGOUT_FAILED,
  LOGIN_FAILED,
  REGISTER_FAILED,
  GET_USER_FAILED,
  REFRESH_TOKEN_FAILED,
  UPDATE_USER_FAILED,
} from "../actions/user/action-creator-user";

export const userReducer = (state = stateUser, action: TUserActions): TStateUser => {
  switch (action.type) {
    //регистрация
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
        user: action.user,
        isAuth: true,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }
    //вход
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        isAuth: true,
        user: {
          name: action.user.name,
          email: action.user.email,
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      };
    }
    //выход
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutFailed: false,
        logoutRequest: false,
        user: {
          name: '',
          email: '',
        },
        isAuth: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
        logoutRequest: false,
      };
    }
    //получение данных о пользователе
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: false,
        user: {
          name: action.user.name,
          email: action.user.email,
        },
        isAuth: true,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
      };
    }
    //обновление токена
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        isTokenUpdated: true,
        tokenUpdateDate: true,
        isAuth: true,
      };
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        isTokenUpdated: true,
        tokenUpdateDate: false
      };
    }
    //изменение данных пользователя
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUserFailed: false,
        updateUserRequest: false,
        user: {
          name: action.user.name,
          email: action.user.email,
        },
        isAuth: true,
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserFailed: true,
        updateUserRequest: false
      };
    }
    default: {
      return state;
    }
  }
};
