import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient.module.css';
import { menuItemPropTypes } from "../../utils/constants";
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

export const BurgerIngredient = ({ item, id }) => {
  const { counts, bun } = useSelector(store => store.ingredients.burgerIngredients);

  const isBun = id === 'bun';

  const count = (isBun && bun) && bun._id === item._id ? 2 : counts[item._id];

  const [, drag] = useDrag({
    type: 'ingredient',
    item: () => { return item }
  });

  return (
    <li className={styles.card} ref={drag} >
      <img className={`${styles.image} mb-1`} src={item.image_large} alt={item.name} />
      {count ?
        <Counter count={count} size='small' /> : null
      }
      <div className={`${styles.price} text_type_digits-default text`}>
        <div className='mr-2'>{item.price}</div>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default`}>{item.name}</p>
    </li>
  )
};

BurgerIngredient.propTypes = {
  item: menuItemPropTypes.isRequired,
  id: PropTypes.string.isRequired
};
