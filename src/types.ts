import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TIngredientsActions } from "./services/actions/ingredients/action-type-ingredients";
import { TModalActions } from "./services/actions/modal/action-type-modal";
import { TOrderActions } from "./services/actions/order/action-type-order";
import { TPasswordActions } from "./services/actions/password/action-type-password";
import { TUserActions } from "./services/actions/user/action-type-user";
import { TSocketActions } from "./services/actions/socket-actions";
import { rootReducer } from "./services/reducers/root-reducer";
import { store } from "./services/store";
import { useSelector } from "react-redux";

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;
};

export type TIngredientWithProductId = TIngredient
  & { 
    productId: string
  };

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type TOrders = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
};

export type TCounts = {
  [name: string]: number;
};

export type TOrderInfo = {
  name: string;
  order: { number: number };
  success: boolean;
};

export type TBurgerIngredients = {
  bun: null | TIngredientWithProductId;
  notBun: Array<TIngredientWithProductId>;
  counts: TCounts;
};

export type TSocketAllActions = {
  socketCreate: string;
  socketClose: string;
  socketSendMessage: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onGetMessage: string;
};

type TApplicationActions =
  | TIngredientsActions
  | TModalActions
  | TOrderActions
  | TPasswordActions
  | TUserActions
  | TSocketActions;

export type RootState = ReturnType<typeof rootReducer>;

export type TDispatch = typeof store.dispatch;

export type TThunk<TReturn = void> = ActionCreator<
  ThunkAction<
    TReturn,
    Action,
    RootState,
    TApplicationActions
  >
>;



export type TGetIngredientsObjWithCount = {
  item: {
    [name: string]: TIngredient;
  };
  count: {
    [name: string]: number;
  };
};
