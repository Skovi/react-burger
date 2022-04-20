import { stateModal } from "../initial-state/state-modal";
import { modalReducer } from "./modal";
import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../actions/modal/action-type-modal';

describe('modalReducer', () => {
  it('должен вернуть начальное состояние', () => {
    expect(modalReducer(undefined, {})).toEqual(stateModal)
  })

  it('должен обработать OPEN_MODAL', () => {
    function CloseModal() {
      dispatch({ type: CLOSE_MODAL })
    }
    expect(
      modalReducer(stateModal, {
        type: OPEN_MODAL,
        callback: CloseModal 
      })
    ).toEqual({
      visible: true,
      callback: CloseModal
    })
  })

  it('должен обработать CLOSE_MODAL', () => {
    expect(
      modalReducer(stateModal, {
        type: CLOSE_MODAL
      })
    ).toEqual(expect.objectContaining({
      visible: false,
      callback: null
    }))
  })
});
