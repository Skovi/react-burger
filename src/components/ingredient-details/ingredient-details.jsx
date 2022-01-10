import styles from "./ingredient-details.module.css";
import PropTypes, { number, string } from 'prop-types';
import { menuItemPropTypes } from "../../utils/constants";

export const IngredientDetails = ({ item }) => {
  return (
    <div className={styles.content}>
      <div className={styles.img}>
        <img src={item.image} />
      </div>
      <h2 className="text text_type_main-large pt-4 pb-8">{item.name}</h2>
      <div className={styles.compound}>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{item.calories}</p>
        </div>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{item.proteins}</p>
        </div>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{item.fat}</p>
        </div>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{item.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
    item: menuItemPropTypes,
};
