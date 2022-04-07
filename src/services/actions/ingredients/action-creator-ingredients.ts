export const GET_ITEMS_FAILED: 'GET_ITEMS_FAILED' = 'GET_ITEMS_FAILED';

export interface IGetItemsFailedAction {
  readonly type: typeof GET_ITEMS_FAILED;
}

export const getItemsFailed = (): IGetItemsFailedAction => {
  return {
    type: GET_ITEMS_FAILED
  }
};
