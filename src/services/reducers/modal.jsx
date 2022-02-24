import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';
import { stateModal } from '../initial-state/state-modal';

export const modalReducer = (state = stateModal, action) => {
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
