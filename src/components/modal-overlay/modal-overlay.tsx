import React, { FC } from 'react';
import styles from "./modal-overlay.module.css";

type TProps = {
  children?: React.ReactNode, 
  onCloseGoBack: () => void
}

export const ModalOverlay: FC<TProps>= ({ children, onCloseGoBack }) => {

  return (
    <div
      className={styles.overlay}
      onClick={onCloseGoBack}
    >
      {children}
    </div>
  );
};
