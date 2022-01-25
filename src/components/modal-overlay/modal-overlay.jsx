import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export const ModalOverlay = ({ children, onCloseGoBack }) => {

  return (
    <div
      className={styles.overlay}
      onClick={onCloseGoBack}
    >
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
  onCloseGoBack: PropTypes.func.isRequired,
};
