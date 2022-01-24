import { useEffect } from 'react';
import styles from './main.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/items';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Modal } from '../modal/modal';
import { INCREASE_ITEM, ADD_ITEM } from "../../services/actions/items";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from 'uuid';

export const Main = () => {
  const { visible, content } = useSelector(store => store.modal);
  const { isLoading, hasError, loaded } = useSelector(store => store.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  const handlerDrop = (item) => {
    dispatch({
      type: ADD_ITEM,
      payload: {
        key: uuidv4(),
        item
      }
    });
    dispatch({
      type: INCREASE_ITEM,
      payload: {
        key: item._id
      }
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
      {visible && <Modal>{content}</Modal>}
    </main >
  );
};
