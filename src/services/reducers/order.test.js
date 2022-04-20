import { stateOrder } from "../initial-state/state-order";
import { orderReducer } from "./order";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
} from "../actions/order/action-type-order";
import {
  CREATE_ORDER_FAILED,
  GET_ORDERS_FAILED,
  GET_USER_ORDERS_FAILED,
} from "../actions/order/action-creator-order";

describe('orderReducer', () => {
  it('должен вернуть начальное состояние', () => {
    expect(orderReducer(undefined, {})).toEqual(stateOrder)
  })

  it('должен обработать CREATE_ORDER_REQUEST', () => {
    expect(
      orderReducer(stateOrder, {
        type: CREATE_ORDER_REQUEST
      })
    ).toEqual(expect.objectContaining({
      orderRequest: true,
      orderFailed: false,
      createOrder: null
    }))
  })

  it('должен обработать CREATE_ORDER_SUCCESS', () => {
    expect(
      orderReducer(stateOrder, {
        type: CREATE_ORDER_SUCCESS,
        order: {
          name: "Space флюоресцентный бургер",
          order: { number: 4345 },
          success: true
        }
      })
    ).toEqual(expect.objectContaining({
      orderRequest: false,
      orderFailed: false,
      createOrder: {
        name: "Space флюоресцентный бургер",
        order: { number: 4345 },
        success: true
      }
    }))
  })

  it('должен обработать CREATE_ORDER_FAILED', () => {
    expect(
      orderReducer(stateOrder, {
        type: CREATE_ORDER_FAILED
      })
    ).toEqual(expect.objectContaining({
      orderFailed: true,
      orderRequest: false,
      createOrder: null
    }))
  })

  it('должен обработать GET_ORDERS_REQUEST', () => {
    expect(
      orderReducer(stateOrder, {
        type: GET_ORDERS_REQUEST
      })
    ).toEqual(expect.objectContaining({
      orderRequest: true,
      orderFailed: false,
      ordersLoaded: false,
      feedOrders: null
    }))
  })

  it('должен обработать GET_ORDERS_SUCCESS', () => {
    expect(
      orderReducer(stateOrder, {
        type: GET_ORDERS_SUCCESS,
        feedOrders: [
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
        ]
      })
    ).toEqual(expect.objectContaining({
      orderFailed: false,
      orderRequest: false,
      ordersLoaded: true,
      feedOrders: [
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
    }))
  })

  it('должен обработать GET_ORDERS_FAILED', () => {
    expect(
      orderReducer(stateOrder, {
        type: GET_ORDERS_FAILED
      })
    ).toEqual(expect.objectContaining({
      orderFailed: true,
      orderRequest: false,
      feedOrders: null
    }))
  })

  it('должен обработать GET_USER_ORDERS_REQUEST', () => {
    expect(
      orderReducer(stateOrder, {
        type: GET_USER_ORDERS_REQUEST
      })
    ).toEqual(expect.objectContaining({
      orderRequest: true,
      orderFailed: false,
      ordersLoaded: false,
      feedOrders: null
    }))
  })

  it('должен обработать GET_USER_ORDERS_SUCCESS', () => {
    expect(
      orderReducer(stateOrder, {
        type: GET_USER_ORDERS_SUCCESS,
        feedOrders: [
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
        ]
      })
    ).toEqual(expect.objectContaining({
      orderFailed: false,
      orderRequest: false,
      ordersLoaded: true,
      feedOrders: [
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
    }))
  })

  it('должен обработать GET_USER_ORDERS_FAILED', () => {
    expect(
      orderReducer(stateOrder, {
        type: GET_USER_ORDERS_FAILED
      })
    ).toEqual(expect.objectContaining({
      orderFailed: true,
      orderRequest: false,
      feedOrders: null
    }))
  })

});
