import { initialState } from "../../utils/constants";
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,

  ADD_ITEM,
  DELETE_ITEM,
  CURRENT_BURGER,
  INCREASE_ITEM,
  DECREASE_ITEM,
  UPDATE_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
} from '../actions/items';


export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }

    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        hasError: false,
        allIngredients: action.items,
        isLoading: false,
        loaded: true
      };
    }

    case GET_ITEMS_FAILED: {
      return {
        ...state,
        hasError: true,
        isLoading: false
      };
    }

    case ADD_ITEM: {
      const { type } = action.payload.item;

      if (type === 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            bun: action.payload.item, counts: {}
          }
        };
      }
      const newItem = {
        ...action.payload.item,
        productId: action.payload.key
      };
      return {
        ...state,
        burgerIngredients: {
          ...state.burgerIngredients,
          notBun: [...state.burgerIngredients.notBun, newItem]
        }
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        burgerIngredients: {
          ...state.burgerIngredients,
          notBun: [...state.burgerIngredients.notBun].filter(el => el.productId !== action.id)
        }
      };
    }

    case CURRENT_BURGER: {
      return {
        ...state,
        currentBurger: action.item
      };
    }

    case INCREASE_ITEM: {
      const { type } = action;

      if (type !== 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            counts: {
              ...state.burgerIngredients.counts,
              [action.payload.key]: (state.burgerIngredients.counts[action.payload.key] || 0) + 1
            }
          }
        };
      } else return state;
    }

    case DECREASE_ITEM: {
      const { type } = action;

      if (type !== 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            counts: {
              ...state.burgerIngredients.counts,
              [action.key]: state.burgerIngredients.counts[action.key] - 1
            }
          }
        };
      } else return state;
    }

    case UPDATE_CONSTRUCTOR: {
      const notBun = [...state.burgerIngredients.notBun];
      const dragNotBun = notBun[action.dragIndex];
      notBun.splice(action.dragIndex, 1);
      notBun.splice(action.hoverIndex, 0, dragNotBun);
      return {
        ...state,
        burgerIngredients: {
          ...state.burgerIngredients,
          notBun: notBun
        }
      };
    }

    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        burgerIngredients: {
          bun: null,
          notBun: [],
          counts: {}
        }
      }
    }

    default: {
      return state;
    }
  };
};
