import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

export const ModalOverlay = ({ active, setActive }) => {
    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setActive(false);
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    return (
        <div
            className={active ? `${styles.active} ${styles.overlay}` : `${styles.overlay}`}
            onClick={() => setActive(false)}
        ></div>
    );
};

ModalOverlay.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
};
