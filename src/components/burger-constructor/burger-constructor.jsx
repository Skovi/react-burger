import React, { useState } from "react";
import PropTypes from "prop-types";
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { OrderDetails } from "../order-details/order-details";
import menuItemPropTypes from '../../utils/constants';
import { Modal } from "../modal/modal";

export const BurgerConstructor = ({ data }) => {
    const [modalActive, setModalActive] = useState(false);

    var bun = data.filter((el) => el.type == "bun") || [];
    var other = data.filter((el) => el.type != "bun") || [];

    const isOpen = () => {
        setModalActive(true);
    };

    return (
        <div className={` ${styles.container} pt-25`}>
            <div
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                className={`${styles.constructorList} pl-4 pr-2`}
            >
                {bun.length > 0 && (
                    <div className={styles.item} key={bun[0]._id}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={bun[0].name}
                            price={bun[0].price}
                            thumbnail={bun[0].image}
                        />
                    </div>
                )}

                <div className={styles.scroll}>
                    {other.length > 0 &&
                        other.map((el, index) => (
                            <div className={`${styles.item} mb-4`} key={index}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    type={el.type}
                                    isLocked={false}
                                    text={el.name}
                                    price={el.price}
                                    thumbnail={el.image}
                                />
                            </div>
                        ))}
                </div>

                {bun.length > 0 && (
                    <div className={styles.item} key={bun[1]._id}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={bun[0].name}
                            price={bun[0].price}
                            thumbnail={bun[0].image}
                        />
                    </div>
                )}
            </div>

            <div className={`${styles.totalCost} pt-10 `}>
                <div className={`${styles.totalValue} mr-10`}>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={isOpen}>
                    Оформить заказ
                </Button>
            </div>
            {modalActive && (<Modal active={modalActive} setActive={setModalActive}><OrderDetails/></Modal>)}
        </div>
    );
};

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes)
};
