import React from "react";
import styles from "./order-details.module.css";
import Image from "../../image/done.png";

export const OrderDetails = () => {
    return (
    <div className={`${styles.content} pt-5 pb-10`}>
                <p className="text text_type_digits-large">015426</p>
                <p className="text text_type_main-medium">Идентификатор заказа</p>
                <div className={`${styles.image} pb-15 pt-15`}>
                    <img src={Image} />
                </div>
                <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
    );
};
