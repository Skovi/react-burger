import { stateIngredients } from "../initial-state/state-ingredients";
import { ingredientsReducer } from "./ingredients";
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  ADD_ITEM,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  UPDATE_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
} from "../actions/ingredients/action-type-ingredients";
import { GET_ITEMS_FAILED } from "../actions/ingredients/action-creator-ingredients";
import { data } from "../../utils/data";

describe('ingredientsReducer', () => {
  it('должен вернуть начальное состояние', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(stateIngredients)
  })

  it('должен обработать GET_ITEMS_REQUEST', () => {
    expect(
      ingredientsReducer(stateIngredients, {
        type: GET_ITEMS_REQUEST
      })
    ).toEqual(expect.objectContaining({
      isLoading: true,
      hasError: false,
      allIngredients: []
    }))
  })

  it('должен обработать GET_ITEMS_SUCCESS', () => {
    expect(
      ingredientsReducer(stateIngredients, {
        type: GET_ITEMS_SUCCESS,
        items: data
      })
    ).toEqual(expect.objectContaining({
      hasError: false,
      allIngredients: data,
      isLoading: false,
      loaded: true
    }))
  })

  it('должен обработать GET_ITEMS_FAILED', () => {
    expect(
      ingredientsReducer(stateIngredients, {
        type: GET_ITEMS_FAILED
      })
    ).toEqual(expect.objectContaining({
      hasError: true,
      isLoading: false,
      allIngredients: []
    }))
  })

  it('должен обработать ADD_ITEM, добавить булку', () => {
    expect(
      ingredientsReducer(stateIngredients, {
        type: ADD_ITEM,
        item: {
          calories: 643,
          carbohydrates: 85,
          fat: 26,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          name: "Флюоресцентная булка R2-D3",
          price: 988,
          proteins: 44,
          type: "bun",
          _id: "60cb6564fce49c00269d4018"
        }
      })
    ).toEqual(expect.objectContaining({
      burgerIngredients: {
        bun: {
          calories: 643,
          carbohydrates: 85,
          fat: 26,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          name: "Флюоресцентная булка R2-D3",
          price: 988,
          proteins: 44,
          type: "bun",
          _id: "60cb6564fce49c00269d4018"
        },
        counts: {},
        notBun: [],
      }
    }))
  })

  it('должен обработать ADD_ITEM, добавить начинку', () => {
    expect(
      ingredientsReducer(stateIngredients, {
        type: ADD_ITEM,
        key: '11111',
        item: {
          calories: 3377,
          carbohydrates: 420,
          fat: 48,
          image: "https://code.s3.yandex.net/react/code/cheese.png",
          image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
          name: "Сыр с астероидной плесенью",
          price: 4142,
          proteins: 84,
          type: "main",
          _id: "60666c42cc7b410027a1a9bf",
        }
      })
    ).toEqual(expect.objectContaining({
      allIngredients: [],
      hasError: false,
      isLoading: false,
      loaded: false,
      burgerIngredients: {
        notBun: [{
          calories: 3377,
          carbohydrates: 420,
          fat: 48,
          image: "https://code.s3.yandex.net/react/code/cheese.png",
          image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
          name: "Сыр с астероидной плесенью",
          price: 4142,
          proteins: 84,
          type: "main",
          _id: "60666c42cc7b410027a1a9bf",
          productId: '11111'
        }],
        counts: {},
        bun: null
      }
    }))
  })

  it('должен обработать DELETE_ITEM', () => {

    const state = {
      burgerIngredients: {
        bun: {
          calories: 643,
          carbohydrates: 85,
          fat: 26,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          name: "Флюоресцентная булка R2-D3",
          price: 988,
          proteins: 44,
          type: "bun",
          _id: "60cb6564fce49c00269d4018"
        },
        notBun: [
          {
            calories: 643,
            carbohydrates: 85,
            fat: 26,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            name: "Филе Люминесцентного тетраодонтимформа",
            price: 988,
            proteins: 44,
            type: "main",
            _id: "60cb6564fce49c00269d4019",
            productId: '1'
          },
          {
            calories: 420,
            carbohydrates: 33,
            fat: 244,
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            name: "Мясо бессмертных моллюсков Protostomia",
            price: 1337,
            proteins: 433,
            type: "main",
            _id: "60cb6564fce49c00269d401a",
            productId: '2'
          },
          {
            calories: 99,
            carbohydrates: 42,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            name: "Соус традиционный галактический",
            price: 15,
            proteins: 42,
            type: "sauce",
            _id: "60cb6564fce49c00269d401f",
            productId: '3'
          },
        ],
        counts: {},
      }
    };

    expect(
      ingredientsReducer(state, {
        type: DELETE_ITEM,
        id: '2'
      })
    ).toEqual(expect.objectContaining({
      burgerIngredients: {
        bun: {
          calories: 643,
          carbohydrates: 85,
          fat: 26,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          name: "Флюоресцентная булка R2-D3",
          price: 988,
          proteins: 44,
          type: "bun",
          _id: "60cb6564fce49c00269d4018"
        },
        notBun: [
          {
            calories: 643,
            carbohydrates: 85,
            fat: 26,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            name: "Филе Люминесцентного тетраодонтимформа",
            price: 988,
            proteins: 44,
            type: "main",
            _id: "60cb6564fce49c00269d4019",
            productId: '1'
          },
          {
            calories: 99,
            carbohydrates: 42,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            name: "Соус традиционный галактический",
            price: 15,
            proteins: 42,
            type: "sauce",
            _id: "60cb6564fce49c00269d401f",
            productId: '3'
          },
        ],
        counts: {},
      }
    }))
  })

  it('должен обработать INCREASE_ITEM', () => {
    const state = {
      burgerIngredients: {
        bun: null,
        notBun: [],
        counts: {
          "60cb6564fce49c00269d401e": 3,
          "60cb6564fce49c00269d401d": 3,
          "60cb6564fce49c00269d4020": 2,
          "60cb6564fce49c00269d401f": 1,
          "60cb6564fce49c00269d4022": 1,
          "60cb6564fce49c00269d4021": 4
        },
      },
    };
    expect(
      ingredientsReducer(state, {
        type: INCREASE_ITEM,
        key: "60cb6564fce49c00269d401c",
        typeItem: "main"
      })
    ).toEqual(expect.objectContaining({
      burgerIngredients: {
        bun: null,
        notBun: [],
        counts: {
          "60cb6564fce49c00269d401e": 3,
          "60cb6564fce49c00269d401d": 3,
          "60cb6564fce49c00269d4020": 2,
          "60cb6564fce49c00269d401f": 1,
          "60cb6564fce49c00269d4022": 1,
          "60cb6564fce49c00269d4021": 4,
          "60cb6564fce49c00269d401c": 1
        },
      },
    }))
  })

  it('должен обработать DECREASE_ITEM', () => {
    const state = {
      allIngredients: {},
      burgerIngredients: {
        bun: null,
        notBun: [],
        counts: {
          "60cb6564fce49c00269d401e": 3,
          "60cb6564fce49c00269d401d": 3,
          "60cb6564fce49c00269d4020": 2,
          "60cb6564fce49c00269d401f": 1,
          "60cb6564fce49c00269d4022": 1,
          "60cb6564fce49c00269d4021": 4,
        },
      },
    };

    expect(
      ingredientsReducer(state, {
        type: DECREASE_ITEM,
        key: "60cb6564fce49c00269d401e",
        typeItem: "bun",
      })
    ).toEqual(state)
    expect(
      ingredientsReducer(state, {
        type: DECREASE_ITEM,
        key: "60cb6564fce49c00269d401e",
        typeItem: "sauce",
      }).burgerIngredients.counts["60cb6564fce49c00269d401e"]
    ).toBe(2)
  })

  it('должен обработать UPDATE_CONSTRUCTOR', () => {
    const state = {
      allIngredients: [],
      burgerIngredients: {
        bun: {
          calories: 643,
          carbohydrates: 85,
          fat: 26,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          name: "Флюоресцентная булка R2-D3",
          price: 988,
          productId: "7b9ae11f-cb8c-4229-a21b-7ac2e4d061a5",
          proteins: 44,
          type: "bun",
          _id: "60cb6564fce49c00269d4018"
        },
        notBun: [
          {
            calories: 14,
            carbohydrates: 11,
            fat: 22,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            name: "Соус фирменный Space Sauce",
            price: 80,
            productId: "b3fdb2cc-da95-4093-94f9-a14420f7ea57",
            proteins: 50,
            type: "sauce",
            _id: "60cb6564fce49c00269d401e"
          },
          {
            calories: 30,
            carbohydrates: 40,
            fat: 20,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            name: "Соус Spicy-X",
            price: 90,
            productId: "cba024bb-2195-4982-93ba-5e873341f463",
            proteins: 30,
            type: "sauce",
            _id: "60cb6564fce49c00269d401d"
          }
        ],
        counts: {}
      },
      isLoading: false,
      hasError: false,
      loaded: true,
    }
    expect(
      ingredientsReducer(state, {
        type: UPDATE_CONSTRUCTOR,
        hoverIndex: 0,
        dragIndex: 1,
      })
    ).toEqual({
      allIngredients: [],
      burgerIngredients: {
        bun: {
          calories: 643,
          carbohydrates: 85,
          fat: 26,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          name: "Флюоресцентная булка R2-D3",
          price: 988,
          productId: "7b9ae11f-cb8c-4229-a21b-7ac2e4d061a5",
          proteins: 44,
          type: "bun",
          _id: "60cb6564fce49c00269d4018"
        },
        notBun: [
          {
            calories: 30,
            carbohydrates: 40,
            fat: 20,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            name: "Соус Spicy-X",
            price: 90,
            productId: "cba024bb-2195-4982-93ba-5e873341f463",
            proteins: 30,
            type: "sauce",
            _id: "60cb6564fce49c00269d401d"
          },
          {
            calories: 14,
            carbohydrates: 11,
            fat: 22,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            name: "Соус фирменный Space Sauce",
            price: 80,
            productId: "b3fdb2cc-da95-4093-94f9-a14420f7ea57",
            proteins: 50,
            type: "sauce",
            _id: "60cb6564fce49c00269d401e"
          },
        ],
        counts: {}
      },
      isLoading: false,
      hasError: false,
      loaded: true,
    })
  })

  it('должен обработать CLEAR_CONSTRUCTOR', () => {
    const state = {
      burgerIngredients: {
        bun: {
          calories: 643,
          carbohydrates: 85,
          fat: 26,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          name: "Флюоресцентная булка R2-D3",
          price: 988,
          productId: "7b9ae11f-cb8c-4229-a21b-7ac2e4d061a5",
          proteins: 44,
          type: "bun",
          _id: "60cb6564fce49c00269d4018"
        },
        notBun: [
          {
            calories: 14,
            carbohydrates: 11,
            fat: 22,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            name: "Соус фирменный Space Sauce",
            price: 80,
            productId: "b3fdb2cc-da95-4093-94f9-a14420f7ea57",
            proteins: 50,
            type: "sauce",
            _id: "60cb6564fce49c00269d401e"
          },
          {
            calories: 30,
            carbohydrates: 40,
            fat: 20,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            name: "Соус Spicy-X",
            price: 90,
            productId: "cba024bb-2195-4982-93ba-5e873341f463",
            proteins: 30,
            type: "sauce",
            _id: "60cb6564fce49c00269d401d"
          }
        ],
        counts: {}
      }
    }
    expect(
      ingredientsReducer(state, {
        type: CLEAR_CONSTRUCTOR
      })
    ).toEqual(expect.objectContaining({
      burgerIngredients: {
        bun: null,
        notBun: [],
        counts: {}
      }
    }))
  })
});
