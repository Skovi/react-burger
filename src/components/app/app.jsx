import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";

export const App = () => {
    const [data, setData] = useState([]);
    const api = "https://norma.nomoreparties.space/api/ingredients";

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(api)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })
            .then((data) => setData(data.data))
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className={styles.container}>
            <AppHeader />
            <main className={styles.content}>
                <BurgerIngredients data={data} />
                <BurgerConstructor data={data} />
            </main>
        </div>
    );
};
