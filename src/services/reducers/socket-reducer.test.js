import { stateSocket } from "../initial-state/state-socket";
import { SocketReducer } from "./socket-reducer";
import {
  SOCKET_SUCCESS,
  SOCKET_ERROR,
  SOCKET_CLOSED,
  SOCKET_GET_MESSAGE,
} from "../actions/socket-actions";

describe('SocketReducer', () => {
  it('должен вернуть начальное состояние', () => {
    expect(SocketReducer(undefined, {})).toEqual(stateSocket)
  })

  it('должен обработать SOCKET_SUCCESS', () => {
    expect(
      SocketReducer(stateSocket, {
        type: SOCKET_SUCCESS
      })
    ).toEqual(expect.objectContaining({
      isConnected: true
    }))
  })

  it('должен обработать SOCKET_ERROR', () => {
    expect(
      SocketReducer(stateSocket, {
        type: SOCKET_ERROR,
        payload: 'Error'
      })
    ).toEqual(expect.objectContaining({
      isConnected: false,
      hasError: 'Error'
    }))
  })

  it('должен обработать SOCKET_CLOSED', () => {
    expect(
      SocketReducer(stateSocket, {
        type: SOCKET_CLOSED
      })
    ).toEqual(expect.objectContaining({
      isConnected: false
    }))
  })

  it('должен обработать SOCKET_GET_MESSAGE', () => {
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
      SocketReducer(stateSocket, {
        type: SOCKET_GET_MESSAGE,
        payload: orders
      })
    ).toEqual(expect.objectContaining({
      orders: orders.orders,
      total: orders.total,
      totalToday: orders.totalToday
    }))
  })

});
