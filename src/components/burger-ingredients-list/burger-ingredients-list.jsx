import React from 'react';
import styles from './burger-ingredients-list.module.css';
import PropTypes from 'prop-types';
import { BurgerIngredient } from '../burger-ingredient/burger-ingredient';
import { menuItemPropTypes } from "../../utils/constants";

export const BurgerIngredientsList = React.forwardRef(({ array, title, id, modal }, ref) => {
  return (
    <div className={'mb-10'} >
      <p id={id} ref={ref} className={` text_type_main-medium mb-6`}>{title}</p>
      <ul className={styles.list} >
        {array.map((item) => <BurgerIngredient
          item={item}
          id={id}
          key={item._id}
          modal={modal}
        />)}
      </ul>
    </div>
  )
});

BurgerIngredientsList.propTypes = {
  array: PropTypes.arrayOf(menuItemPropTypes).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.func.isRequired
}
