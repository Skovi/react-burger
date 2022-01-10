import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

export const Modal = ({ active, setActive, children, isVisible }) => {
    return ReactDOM.createPortal(
        <>
            <ModalOverlay active={active} setActive={setActive} />
            <div className={`${styles.content} p-10 pb-15`} onClick={(e) => e.stopPropagation()}>
                {isVisible ? (
                    <div className={styles.header}>
                        <p className="text text_type_main-medium">Детали ингредиента</p>
                        <CloseIcon type="primary" onClick={() => setActive(false)} />
                    </div>
                ) : (
                    <div className={styles.close}>
                        <CloseIcon type="primary" onClick={() => setActive(false)} />
                    </div>
                )}

                {children}
            </div>
        </>,
        document.getElementById("root")
    );
};

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    isVisible: PropTypes.bool,
};
