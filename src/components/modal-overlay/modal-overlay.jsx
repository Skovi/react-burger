import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export const ModalOverlay = ({ children, requestClose }) => {
  
  return (
    <div
      className={styles.overlay}
      onClick={(e) => requestClose(e)}
    >
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
  requestClose: PropTypes.func
};
