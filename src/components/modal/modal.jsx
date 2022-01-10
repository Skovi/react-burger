import { useEffect } from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { useSelector } from 'react-redux';

export const Modal = ({ children }) => {
  const requestClose = useSelector(store => store.modal.callback);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        requestClose && requestClose();
      }
    }

    window.addEventListener('keydown', handleEsc);

    return () => { window.removeEventListener('keydown', handleEsc); }
  }, [requestClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay requestClose={requestClose} />
      <div className={`${styles.content} p-10 pb-15`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} >
          <CloseIcon type="primary" onClick={(e) => requestClose(e)} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("modals")
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
}
