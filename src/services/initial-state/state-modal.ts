export type TStateModal = {
  visible: boolean,
  callback: null | (() => void),
};

export const stateModal: TStateModal = {
  visible: false,
  callback: null,
};
