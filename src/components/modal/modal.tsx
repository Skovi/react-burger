import React, { 
  useEffect, 
  FC, 
} from 'react';
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { useHistory } from "react-router-dom";
import { useSelector } from '../../utils/hooks';

type TProps = {
  children: React.ReactNode
}

export const Modal: FC<TProps> = ({ children }) => {

  const history = useHistory();

  const { visible, callback } = useSelector((store) => store.modal);

  const onCloseGoBack = () => {
    if (visible && callback) {
      callback();
    } else {
      history.goBack();
    };
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseGoBack();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => { window.removeEventListener('keydown', handleEsc); }
  }, [handleEsc]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onCloseGoBack={onCloseGoBack} />
      <div className={`${styles.content} p-10 pb-15`} >
        <div className={styles.close} onClick={onCloseGoBack}>
          <CloseIcon type="primary" />
        </div>
        <div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("modals")!
  );
};
