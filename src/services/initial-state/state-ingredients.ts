import {
  TBurgerIngredients,
  TIngredient,
} from "../../types";

export type TStateIngredients = {
  isLoading: boolean,
  hasError: boolean,
  loaded: boolean,
  allIngredients: Array<TIngredient>,
  burgerIngredients: TBurgerIngredients,
};

export const stateIngredients: TStateIngredients = {
  isLoading: false,
  hasError: false,
  loaded: false,
  allIngredients: [],
  burgerIngredients: {
    bun: null,
    notBun: [],
    counts: {}
  },
};
