import React, { useState } from "react";
import PropTypes from "prop-types";
import { Counter, CurrencyIcon, Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import menuItemPropTypes from "../../utils/constants";
import { Modal } from "../modal/modal";

const BUN_TYPE = "bun";
const SAUCE_TYPE = "sauce";
const MAIN_TYPE = "main";

export const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = useState("bun");
    const [modalActive, setModalActive] = useState(false);
    const [element, setElement] = useState({});
    const isVisible = true;

    const setClick = (e) => {
        setCurrent(e);
    };

    const getElement = (el) => {
        setModalActive(true);
        setElement(el);
    };

    function filterArr(arr, type) {
        let array = arr.filter((el) => el.type === type);
        let category = "";

        if (type === BUN_TYPE) {
            category = "Булки";
        } else if (type === SAUCE_TYPE) {
            category = "Соусы";
        } else if (type === MAIN_TYPE) {
            category = "Начинки";
        }

        const list = array.map((el) => (
            <li className={styles.li} key={el._id} id={el._id} onClick={() => getElement(el)}>
                <div className={styles.counter}>
                    <Counter count={1} size="default" />
                </div>
                <img src={el.image} />
                <div className={styles.price}>
                    <p className="text text_type_digits-default pr-2">{el.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default">{el.name}</p>
            </li>
        ));

        return (
            <>
                <h2 className={`${styles.h2} text text_type_main-medium`} id={type}>
                    {category}
                </h2>
                <ul className={styles.ul}>{list}</ul>
            </>
        );
    }

    return (
        <div className={styles.container}>
            <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
            <div style={{ display: "flex" }} className="pb-10">
                <Tab value="bun" active={current === "bun"} onClick={setClick}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === "sauce"} onClick={setClick}>
                    Соусы
                </Tab>
                <Tab value="toppings" active={current === "toppings"} onClick={setClick}>
                    Начинки
                </Tab>
            </div>

            <div className={`${styles.ingredients}`} id="ingredients">
                {data && filterArr(data, "bun")}
                {data && filterArr(data, "sauce")}
                {data && filterArr(data, "main")}
            </div>
            {modalActive && (
                <Modal active={modalActive} setActive={setModalActive} li={element} isVisible={isVisible}>
                    <IngredientDetails li={element}/>
                </Modal>
            )}
        </div>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes)
};
