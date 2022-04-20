import styles from "./order-details.module.css";
import Image from "../../image/done.png";
import { useSelector } from "../../utils/hooks";

export const OrderDetails = () => {
  const {
    orderRequest,
    orderFailed,
    createOrder
  } = useSelector((store) => store.order);

  return (
    <>
      {orderRequest && 'Загрузка...'}
      {orderFailed && 'Произошла ошибка'}
      {!orderRequest && !orderFailed &&
        <div className={`${styles.content} pt-5 pb-10`}>
          <p className="text text_type_digits-large">{createOrder?.order.number}</p>
          <p className="text text_type_main-medium">Идентификатор заказа</p>
          <div className={`${styles.image} pb-15 pt-15`}>
            <img src={Image} alt='Иконка' />
          </div>
          <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      }
    </>
  );
};
