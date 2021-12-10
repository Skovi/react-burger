import React from 'react';
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { data } from '../../utils/data';

const BUN_TYPE = 'bun';
const SAUCE_TYPE = 'sauce';
const MAIN_TYPE = 'main';

class BurgerIngredients extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            current: 'bun',
        }
        this.filterArr = this.filterArr.bind(this)
    }

    setCurrent = (current: any) => this.setState({ ...this.state, current: current });

    filterArr(arr: any, type: any) {
        let array = arr.filter((element: any) => element.type === type);
        let category = '';

        if (type === BUN_TYPE) {
            category = 'Булки'
        } else if (type === SAUCE_TYPE) {
            category = 'Соусы'
        } else if (type === MAIN_TYPE) {
            category = 'Главное'
        }

        let list = array.map((element: any) => (
            <li className={styles.li} key={element._id}>
                <div className={styles.counter}>
                <Counter count={1} size="default" />
                </div>
                <img src={element.image} />
                <p className="text text_type_digits-default">
                    {element.price}
                    <CurrencyIcon type="primary" />
                </p>

                <p className="text text_type_main-default">{element.name}</p>
            </li>
        ))

        return (<>
            <h2 className={`${styles.h2} text text_type_main-medium`} id={type}>{category}</h2>
            <ul className={styles.ul}>
                {list}
            </ul>
        </>

        )
    }

    render() {
        return (
            <div className={styles.container}>
                <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
                <div style={{ display: 'flex' }} className='pb-10'>
                    <Tab value="bun" active={this.state.current === 'bun'} onClick={this.setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={this.state.current === 'sauce'} onClick={this.setCurrent}>
                        Соусы
                    </Tab>
                    <Tab value="toppings" active={this.state.current === 'toppings'} onClick={this.setCurrent}>
                        Начинки
                    </Tab>
                </div>

                <div className={`${styles.ingredients}`}>
                    {this.filterArr(data, 'bun')}
                    {this.filterArr(data, 'sauce')}
                    {this.filterArr(data, 'main')}
                </div>

            </div>
        )
    }
}

export default BurgerIngredients;