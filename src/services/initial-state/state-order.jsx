export const stateOrder = {
  isLoading: false,
  hasError: false,
  loaded: false,
  allIngredients: {},
  burgerIngredients: {
    bun: null,
    notBun: [],
    counts: {}
  },
  currentOrder: null,
  currentBurger: null,
  orderRequest: false,
  orderFailed: false,
};
