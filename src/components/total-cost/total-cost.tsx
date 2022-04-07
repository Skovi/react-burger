import { FC } from 'react';
import styles from "./total-cost.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TProps = {
  price: number
};

export const TotalCost: FC<TProps> = ({ price }) => {

  return (
    <div className={`${styles.container} mr-10`}>
      <p className="text text_type_digits-medium mr-2">
        {price}
      </p>
      <CurrencyIcon type="primary" />
    </div>
  )
};
