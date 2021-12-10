import React from 'react';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { data } from '../../utils/data';

export const BurgerConstructor = () => {
    return (
        <div className={` ${styles.container} pt-25`} >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className={`${styles.constructorList} pl-4 pr-2`}>
                <div className={styles.item}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={data[0].image}
                    />
                </div>
                <div className={styles.item}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Соус традиционный галактический"
                        price={30}
                        thumbnail={data[5].image}
                    />
                </div>
                <div className={styles.item}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Мясо бессмертных моллюсков Protostomia"
                        price={300}
                        thumbnail={data[4].image}
                    />
                </div>
                <div className={styles.item}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Плоды Фалленианского дерева"
                        price={80}
                        thumbnail={data[7].image}
                    />
                </div>
                <div className={styles.item}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Хрустящие минеральные кольца"
                        price={80}
                        thumbnail={data[8].image}
                    />
                </div>
                <div className={styles.item}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Хрустящие минеральные кольца"
                        price={80}
                        thumbnail={data[8].image}
                    />
                </div>
                <div className={styles.item}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={data[0].image}
                    />
                </div>

                <div className={`${styles.totalCost} pt-10 `}>
                    <div className={`${styles.totalValue} mr-10`}>
                        <p className='text text_type_digits-medium'>610</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large">Оформить заказ</Button>
                </div>
            </div>
        </div>
    )
}