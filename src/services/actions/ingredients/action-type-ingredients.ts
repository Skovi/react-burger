import { 
  TIngredient, 
  TIngredientWithProductId,
 } from "../../../types";
import { IGetItemsFailedAction } from "./action-creator-ingredients";

export const GET_ITEMS_REQUEST: 'GET_ITEMS_REQUEST' = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS: 'GET_ITEMS_SUCCESS' = 'GET_ITEMS_SUCCESS';

export const INCREASE_ITEM: 'INCREASE_ITEM' = 'INCREASE_ITEM';
export const DECREASE_ITEM: 'DECREASE_ITEM' = 'DECREASE_ITEM';
export const DELETE_ITEM: 'DELETE_ITEM' = 'DELETE_ITEM';
export const ADD_ITEM: 'ADD_ITEM' = 'ADD_ITEM';
export const UPDATE_CONSTRUCTOR: 'UPDATE_CONSTRUCTOR' = 'UPDATE_CONSTRUCTOR';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';

export const TAB_SWITCH: 'TAB_SWITCH' = 'TAB_SWITCH';

export interface IGetItemsRequestAction {
  readonly type: typeof GET_ITEMS_REQUEST;
}

export interface IGetItemsSuccessAction {
  readonly type: typeof GET_ITEMS_SUCCESS;
  readonly items: Array<TIngredient>;
}

export interface IIncreaseItemAction {
  readonly type: typeof INCREASE_ITEM;
  readonly key: string;
  readonly typeItem: string;
}

export interface IDecreaseItemAction {
  readonly type: typeof DECREASE_ITEM;
  readonly key: string;
  readonly typeItem: string;
}

export interface IDeleteItemAction {
  readonly type: typeof DELETE_ITEM;
  readonly id: string;
}

export interface IAddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly item: TIngredientWithProductId;
  readonly key: string;
}

export interface IUpdateConstructorAction {
  readonly type: typeof UPDATE_CONSTRUCTOR;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IClearConstructorAction {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export interface ITabSwitchAction {
  readonly type: typeof TAB_SWITCH;
}

export type TIngredientsActions =
  | IGetItemsRequestAction
  | IGetItemsSuccessAction
  | IGetItemsFailedAction
  | IIncreaseItemAction
  | IDecreaseItemAction
  | IDeleteItemAction
  | IAddItemAction
  | IUpdateConstructorAction
  | IClearConstructorAction
  | ITabSwitchAction;
