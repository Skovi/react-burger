import styles from './main.module.css';
import { BurgerIngredients } from '../../components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../../components/burger-constructor/burger-constructor';
import {
  INCREASE_ITEM,
  ADD_ITEM,
} from "../../services/actions/ingredients/action-type-ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from 'uuid';
import { TIngredient } from '../../types';
import {
  useDispatch,
  useSelector,
} from '../../utils/hooks';

export const Main = () => {
  const { isLoading, hasError, loaded } = useSelector((store) => store.ingredients);

  const dispatch = useDispatch();

  const handlerDrop = (item: TIngredient) => {
    dispatch({
      type: ADD_ITEM,
      key: uuidv4(),
      item: item
    });
    dispatch({
      type: INCREASE_ITEM,
      key: item._id,
      typeItem: item.type
    });
  };

  return (
    <main className={`${styles.main} p-10`}>
      {isLoading && <h1 className={`${styles.isLoading} text text_type_main-large text_color_inactive`}>Загрузка...</h1>}
      {hasError && <h1 className={`${styles.hasError} text text_type_main-large`}>Извините, произошла ошибка. </h1>}
      {!isLoading && !hasError && loaded &&
        <DndProvider backend={HTML5Backend}>
          <div className={styles.container}>
            <BurgerIngredients />
            <BurgerConstructor handlerDrop={handlerDrop} />
          </div>
        </DndProvider>
      }
    </main >
  );
};
