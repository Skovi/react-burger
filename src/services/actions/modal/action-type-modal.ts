export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';

export interface IOpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly callback: null | (() => void);
}

export interface ICloseModalAction {
  readonly type: typeof CLOSE_MODAL;
  readonly callback: null | (() => void);
}

export type TModalActions =
  | IOpenModalAction
  | ICloseModalAction;
