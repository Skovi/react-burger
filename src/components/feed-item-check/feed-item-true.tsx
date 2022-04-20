import { FC } from "react";
import styles from './feed-item-check.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  getBurgerPrice,
  getIngredientsOrder,
  orderDate,
  statusColor
} from "../../utils/functions";
import { TIngredient, TOrder } from "../../types";

type TProps = {
  item: TOrder,
  allIngredients: Array<TIngredient>,
};

export const FeedItemTrue: FC<TProps> = ({ item, allIngredients }) => {

  const orderIngredients = getIngredientsOrder(item, allIngredients);

  const bunItem = orderIngredients.find(el => el?.type === 'bun');

  const notBunItems = orderIngredients.filter(el => el?.type !== 'bun');

  let notBunItemsLast = null;

  let notBunItemsMax = notBunItems;

  if (notBunItems.length > 5) {
    notBunItemsMax = notBunItems.slice(0, 4);
    notBunItemsLast = notBunItems.slice(4, 5);
  };

  let count = orderIngredients.length;

  let zIndex = 900;

  const burgerPrice = orderIngredients ? getBurgerPrice(orderIngredients) : '';

  const date = orderDate(item.createdAt);

  const st = statusColor(item.status);

  return (
    <li className={`${styles.li} p-6 mb-6 mr-2`} key={item._id}>

      <div className={styles.number_order}>
        <p className="text text_type_digits-default">#{item.number}</p>
        <p className="text text_type_main-default text_color_inactive">{date}</p>
      </div>

      <div className={styles.name_and_status}>
        <p className="text text_type_main-medium">{item.name}</p>
        <p className={`text text_type_main-default ${styles[`status_color_${st.textColor}`]}`}>{st.text}</p>
      </div>

      <div className={styles.pictures}>
        <div className={styles.images}>

          <div className={styles.div_image} style={{ zIndex: `${zIndex -= 1}` }}>
            <img src={bunItem?.image_mobile} className={styles.image} alt='Вкусная булочка' />
          </div>

          <div className={styles.notBun}>
            {notBunItemsMax.map((item, i) =>
              <div className={styles.div_image} style={{ right: `${count += 16}px`, zIndex: `${zIndex -= 1}` }} key={i}>
                <img src={item.image_mobile} className={styles.image} alt='Восхитительная начинка' />
              </div>
            )}
          </div>

          {notBunItemsLast !== null ?
            <div className={styles.div_image} style={{ right: `${count += 16}px`, zIndex: `${zIndex -= 1}` }}>
              <img src={notBunItemsLast[0].image_mobile} className={styles.last_img} alt='Вкусная булочка' />
            </div> : null}
          {orderIngredients.length > 6 ? (<div className={`${styles.counter} text text_type_digits-default`} style={{ right: `${count += 46}px`, zIndex: '900' }}>
            <span>{`+${orderIngredients.length - 6}`}</span>
          </div>)
            : null}

        </div>

        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">{burgerPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )
};
