import React, { FC } from 'react';
import styles from './burger-ingredients-list.module.css';
import { BurgerIngredient } from '../burger-ingredient/burger-ingredient';
import { Link, useLocation, } from "react-router-dom";
import { TIngredient } from '../../types';

type TProps = {
  array: Array<TIngredient>, 
  title: string, 
  id: string,
};

export const BurgerIngredientsList = React.forwardRef<HTMLParagraphElement, TProps>(({ array, title, id }, ref) => {
  const location = useLocation();

  return (
    <div className={'mb-10'} >
      <p id={id} ref={ref} className={` text_type_main-medium mb-6`}>{title}</p>
      <ul className={styles.list} >
        {array.map((item: TIngredient) =>
          <Link key={item._id} to={{
            pathname: `/ingredients/${item._id}`, 
            state: { background: location }
          }}>
            <BurgerIngredient
              item={item}
              id={id}
            />
          </Link>
        )}
      </ul>
    </div>
  )
});
