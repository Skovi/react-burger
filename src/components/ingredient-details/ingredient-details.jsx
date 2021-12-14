import React from "react";
import { Modal } from "../modal/modal";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";
import menuItemPropTypes from '../../utils/constants';

export const IngredientDetails = ({ li }) => {
    return (
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src={li.image_large} />
                </div>
                <h2 className="text text_type_main-large pt-4 pb-8">{li.name}</h2>
                <div className={styles.compound}>
                    <div className={styles.cal}>
                        <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
                        <p className="text text_type_digits-default text_color_inactive">{li.calories}</p>
                    </div>
                    <div className={styles.cal}>
                        <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{li.proteins}</p>
                    </div>
                    <div className={styles.cal}>
                        <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{li.fat}</p>
                    </div>
                    <div className={styles.cal}>
                        <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                        <p className="text text_type_digits-default text_color_inactive">{li.carbohydrates}</p>
                    </div>
                </div>
            </div>
    );
};

IngredientDetails.propTypes = {
    li: menuItemPropTypes,
};
