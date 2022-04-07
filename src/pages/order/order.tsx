import { useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import {
  getOrders,
  getUserOrders,
} from '../../services/actions/order/order';
import {
  useDispatch,
  useSelector,
} from '../../utils/hooks';
import {
  getBurgerPrice,
  getIngredientsObjWithCount,
  getIngredientsOrder,
  orderDate,
  statusColor,
} from '../../utils/functions';
import styles from './order.module.css';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const Order = () => {
  const dispatch = useDispatch();

  const isProfile = !!useRouteMatch("/profile");

  const { number } = useParams<{ number: string }>();

  useEffect(
    () => {
      dispatch(isProfile
        ? getUserOrders()
        : getOrders()
      )
    },
    [dispatch, isProfile]
  );

  const { allIngredients } = useSelector((store) => store.ingredients);

  const { feedOrders } = useSelector((store) => store.order);

  const item = feedOrders ? feedOrders.find(el => el.number === +number) : null;

  const st = item ? statusColor(item.status) : null;

  const date = item && item.createdAt && orderDate(item?.createdAt);

  const ingredients = item ? getIngredientsOrder(item, allIngredients) : null;

  const ingredientsSet = Array.from(new Set(ingredients));

  const objIngredientsWithCount = ingredients && getIngredientsObjWithCount(ingredients);

  const burgerPrice = ingredients && getBurgerPrice(ingredients);

  return (
    <div className={styles.container}>
      <span className={`${styles.number_order} text text_type_digits-default`}>#{number}</span>
      <p className={`${styles.title} text text_type_main-medium mb-3 mt-10`}>{item?.name}</p>
      <p className={`text text_type_main-default mb-15 ${styles[`status_color_${st?.textColor}`]}`}>{st?.text}</p>
      <p className={`${styles.title} text text_type_main-medium mb-6`}>Состав:</p>
      <ul className={`${styles.ingredients} mb-10`}>
        {ingredientsSet?.map(el =>
          <li className={`${styles.item} mr-6`} key={uuidv4()}>
            <div className={`${styles.div_image} mr-4`}>
              <img src={objIngredientsWithCount?.item[el._id]?.image_mobile} alt='Ингредиент' className={styles.image} />
            </div>
            <p className={`${styles.ingredient} text text_type_main-default mr-4`}>{objIngredientsWithCount?.item[el._id]?.name}</p>
            <p className="text text_type_digits-default mr-1">{objIngredientsWithCount?.count[el._id]} x {objIngredientsWithCount?.item[el._id]?.price}</p>
            <CurrencyIcon type='primary' />
          </li>)}
      </ul>
      <div className={styles.info}>
        <p className='text text_type_main-default text_color_inactive'>{date}</p>
        <p className={`${styles.element_price} text`}>
          {burgerPrice}
          <CurrencyIcon type='primary' />
        </p>
      </div>
    </div>
  )
};
