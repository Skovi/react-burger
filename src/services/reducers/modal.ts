import { 
  OPEN_MODAL, 
  CLOSE_MODAL, 
  TModalActions,
 } from '../actions/modal/action-type-modal';
import { 
  stateModal, 
  TStateModal,
 } from '../initial-state/state-modal';

export const modalReducer = (state = stateModal, action: TModalActions): TStateModal => {
  switch (action.type) {

    case OPEN_MODAL: {
      return {
        visible: true,
        callback: action.callback
      };
    }

    case CLOSE_MODAL: {
      return {
        visible: false,
        callback: null,
      };
    }

    default: {
      return state;
    }
  };
};
