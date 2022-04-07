import {
  useEffect,
  useState,
} from 'react';
import styles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { TIngredient } from '../../types';
import { useSelector } from '../../utils/hooks';

export const IngredientDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { allIngredients } = useSelector((store) => store.ingredients);

  const [burger, setBurger] = useState({
    image: '',
    name: '',
    calories: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
  });

  useEffect(() => {
    const item = allIngredients.find((item: TIngredient) => item._id === id);
    if (item) {
      setBurger({
        image: item.image_large,
        name: item.name,
        calories: item.calories,
        proteins: item.proteins,
        fat: item.fat,
        carbohydrates: item.carbohydrates,
      })
    };
  }, [allIngredients]);

  return (
    <div className={styles.content} >
      <p className="text text_type_main-large">Детали ингредиента</p>
      <div className={`${styles.img} mt-20`}>
        <img src={burger.image} alt='Вкусная булочка' />
      </div>
      <h2 className="text text_type_main-large pt-4 pb-8">{burger.name}</h2>
      <div className={styles.compound}>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{burger.calories}</p>
        </div>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{burger.proteins}</p>
        </div>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{burger.fat}</p>
        </div>
        <div className={styles.cal}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{burger.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
};
