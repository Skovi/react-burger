import {
  useState,
  useEffect
} from 'react';
import styles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { getProductsRequest } from '../../utils/api';

export const IngredientDetails = () => {
  const { id } = useParams();

  const [burger, setBurger] = useState({
    image: '',
    name: '',
    calories: '',
    proteins: '',
    fat: '',
    carbohydrates: '',
  });

  useEffect(() => {
    getProductsRequest().then((res) => {
      const item = res.data.find(item => item._id === id);
      setBurger({
        image: item.image_large,
        name: item.name,
        calories: item.calories,
        proteins: item.proteins,
        fat: item.fat,
        carbohydrates: item.carbohydrates,
      })
    }).catch((err) => {
      console.log(err)
    })
  }, [id]);

  return (
    <div className={styles.content} >
      <div className={`${styles.img} mt-20`}>
        <img src={burger.image} />
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
