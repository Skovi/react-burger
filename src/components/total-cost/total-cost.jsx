import styles from "./total-cost.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const TotalCost = ({ price }) => {

  return (
    <div className={`${styles.container} mr-10`}>
      <p className="text text_type_digits-medium mr-2">
        {price}
      </p>
      <CurrencyIcon type="primary" />
    </div>
  )
}

TotalCost.propTypes = {
  price: PropTypes.number.isRequired,
};
