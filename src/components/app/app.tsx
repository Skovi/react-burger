import React from 'react';
import styles from './app.module.css'
import { AppHeader } from '../app-header/app-header';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

export const App = () => {
    return (
        <div className={styles.container}>
            <AppHeader />
            <main className={styles.content}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </div>
    )
}