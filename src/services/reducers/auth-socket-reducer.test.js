import { stateAuthSocket } from "../initial-state/state-auth-socket";
import { AuthSocketReducer } from "./auth-socket-reducer";
import {
  AUTH_SOCKET_SUCCESS,
  AUTH_SOCKET_ERROR,
  AUTH_SOCKET_CLOSED,
  AUTH_SOCKET_GET_MESSAGE,
} from "../actions/auth-socket-actions";

describe('AuthSocketReducer', () => {
  it('должен вернуть начальное состояние', () => {
    expect(AuthSocketReducer(undefined, {})).toEqual(stateAuthSocket)
  })

  it('должен обработать AUTH_SOCKET_SUCCESS', () => {
    expect(
      AuthSocketReducer(stateAuthSocket, {
        type: AUTH_SOCKET_SUCCESS
      })
    ).toEqual(expect.objectContaining({
      isConnected: true
    }))
  })

  it('должен обработать AUTH_SOCKET_ERROR', () => {
    expect(
      AuthSocketReducer(stateAuthSocket, {
        type: AUTH_SOCKET_ERROR,
        payload: 'Error'
      })
    ).toEqual(expect.objectContaining({
      isConnected: false,
      hasError: 'Error'
    }))
  })

  it('должен обработать AUTH_SOCKET_CLOSED', () => {
    expect(
      AuthSocketReducer(stateAuthSocket, {
        type: AUTH_SOCKET_CLOSED
      })
    ).toEqual(expect.objectContaining({
      isConnected: false
    }))
  })

  it('должен обработать AUTH_SOCKET_GET_MESSAGE', () => {
    const orders = {
      orders: [
        {
          createdAt: "2022-04-06T09:48:13.379Z",
          ingredients: ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd"],
          name: "Space флюоресцентный бургер",
          number: '13034',
          status: "done",
          updatedAt: "2022-04-06T09:48:13.518Z",
          _id: "624d61dd1a3b2c001bcfca0d"
        },
        {
          createdAt: "2022-04-06T09:48:47.541Z",
          ingredients: ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733c8"],
          name: "Space антарианский люминесцентный бессмертный флюоресцентный spicy бургер",
          number: 13035,
          status: "done",
          updatedAt: "2022-04-06T09:48:47.706Z",
          _id: "624d61ff1a3b2c001bcfca5c"
        },
        {
          createdAt: "2022-04-07T09:01:13.362Z",
          ingredients: ['60d3b41abdacab0026a733c7', '60d3b41abdacab0026a733cd'],
          name: "Space флюоресцентный бургер",
          number: 13074,
          status: "done",
          updatedAt: "2022-04-07T09:01:13.513Z",
          _id: "624ea8591a3b2c001bcfd419"
        }
      ],
      total: 11111,
      totalToday: 111
    }

    expect(
      AuthSocketReducer(stateAuthSocket, {
        type: AUTH_SOCKET_GET_MESSAGE,
        payload: orders
      })
    ).toEqual(expect.objectContaining({
      orders: orders.orders,
      total: orders.total,
      totalToday: orders.totalToday
    }))
  })
});
