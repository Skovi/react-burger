import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export const AppHeader = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.content}>

                <div className={styles.twoA}>
                    <div className={styles.firstCont}>
                        <BurgerIcon type="primary" />
                        <a href='#' className={`${styles.firstA} text text_type_main-default ml-2`}>Конструктор</a>
                    </div>

                    <div className={styles.secondCont}>
                        <ListIcon type="secondary" />
                        <a href='#' className={`${styles.secondA} text text_type_main-default text_color_inactive ml-2`}>Лента заказов</a>
                    </div>
                </div>

                <div className={styles.logo}>
                    <Logo />
                </div>

                <div className={styles.thirdCont}>
                    <ProfileIcon type="secondary" />
                    <a href='#' className={`${styles.thirdA} text text_type_main-default text_color_inactive ml-2`}>Личный кабинет</a>
                </div>

            </nav>
        </header>
    )
}