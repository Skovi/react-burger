import {
  stateIngredients,
  TStateIngredients,
} from "../initial-state/state-ingredients";
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  ADD_ITEM,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  UPDATE_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
  TIngredientsActions
} from "../actions/ingredients/action-type-ingredients";
import { GET_ITEMS_FAILED } from "../actions/ingredients/action-creator-ingredients";

export const ingredientsReducer = (state = stateIngredients, action: TIngredientsActions): TStateIngredients => {
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
      if (action.item.type === 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            bun: action.item, counts: {}
          }
        };
      }
      const newItem = {
        ...action.item,
        productId: action.key
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
          notBun: [...state.burgerIngredients.notBun].filter((el) => el.productId !== action.id)
        }
      };
    }

    case INCREASE_ITEM: {

      if (action.typeItem !== 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            counts: {
              ...state.burgerIngredients.counts,
              [action.key]: (state.burgerIngredients.counts[action.key] || 0) + 1
            }
          }
        };
      } else return state;
    }

    case DECREASE_ITEM: {

      if (action.typeItem !== 'bun') {
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
