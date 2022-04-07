import {
  useCallback,
  FC,
} from "react";
import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { OrderDetails } from "../order-details/order-details";
import {
  DELETE_ITEM,
  DECREASE_ITEM,
  UPDATE_CONSTRUCTOR,
} from "../../services/actions/ingredients/action-type-ingredients";
import { calculationTotalCost } from "../../utils/functions";
import { createOrder } from "../../services/actions/order/order";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from '../../services/actions/modal/action-type-modal';
import { BurgerItem } from '../burger-item/burger-item';
import { TotalCost } from "../total-cost/total-cost";
import { useDrop } from 'react-dnd';
import { useHistory } from "react-router-dom";
import { Modal } from "../modal/modal";
import { TIngredient } from "../../types";
import {
  useDispatch,
  useSelector,
} from "../../utils/hooks";

type TProps = {
  handlerDrop: (item: TIngredient) => void;
};

type TIngredientWithProductId = TIngredient &
{ productId: string };

export const BurgerConstructor: FC<TProps> = ({ handlerDrop }) => {
  const { bun, notBun } = useSelector((store) => store.ingredients.burgerIngredients);
  const { visible } = useSelector((store) => store.modal);
  const { isAuth } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const moveItem = useCallback((dragIndex, hoverIndex) => {
    dispatch({
      type: UPDATE_CONSTRUCTOR,
      hoverIndex: hoverIndex,
      dragIndex: dragIndex
    })
  }, [dispatch]);

  const [{ canDrop, isHover }, drop] = useDrop({
    accept: "ingredient",
    drop(item: TIngredientWithProductId) {
      handlerDrop(item);
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handlerClick = () => {
    if (isAuth) {
      const ingredients_id = notBun.map((el: TIngredientWithProductId) => el._id)
      dispatch(
        createOrder(
          [bun?._id, ...ingredients_id]
        )
      );
      dispatch({
        type: OPEN_MODAL,
        callback: () => dispatch({ type: CLOSE_MODAL }),
      });
    } else {
      history.replace({ pathname: "/login" });
      return;
    };
  };

  const style: React.CSSProperties = notBun.length > 4 ? { overflowY: 'auto' } : {};
  const isActive = canDrop && isHover;
  const classStyle = isActive ? 'active' : canDrop ? 'candrop' : '';
  const classForNotBun = (notBun.length || bun) && classStyle;
  const classStyles = classForNotBun ? classForNotBun : classStyle;

  return (
    <div className={`${styles.container} pl-4`} ref={drop}>
      {(!bun && notBun.length < 1) &&
        <div className={`${styles.emptyContainer} ${styles[classStyle]}`}>
          <h1 className="text text_type_main-large text_color_inactive mb-10">
            Перенесите сюда ингредиенты, которые хотите добавить в ваш бургер.
          </h1>
          <h2 className="text text_type_main-medium text_color_inactive mt-4">
            Для начала добавьте булку.
          </h2>
        </div>
      }

      <div className={`${styles.ingredients} ${styles[classStyles]}`}>
        {bun && <div className='mr-10'>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        }

        {!bun && notBun.length ?
          <div className={styles.bun}>
            <h2 className={`$ text text_type_main-medium text_color_inactive mb-10`}>
              Вы сможете оформить заказ, если добавите булку
            </h2>
          </div> :
          ""
        }

        <ul className={styles.notBun} style={style}>
          {notBun.map((item: TIngredientWithProductId, i: number) => {
            const deleteIngredient = () => {
              dispatch({
                type: DELETE_ITEM,
                id: item.productId
              })
              dispatch({
                type: DECREASE_ITEM,
                key: item._id,
                typeItem: item.type
              })
            }
            return (
              <BurgerItem
                item={item}
                index={i}
                key={item.productId}
                deleteIngredient={deleteIngredient}
                moveItem={moveItem}
              />
            )
          })
          }
        </ul>

        {bun && <div className='mr-10'>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        }
      </div>

      <div className={`${styles.order} mt-10 mr-10`}>
        {(notBun.length && bun) ? <TotalCost price={calculationTotalCost(bun, notBun)} /> : null}
        {bun &&
          <Button type="primary" size="large" onClick={handlerClick}>
            Оформить заказ
          </Button>
        }
      </div>
      {visible && <Modal><OrderDetails /></Modal>}
    </div>
  )
};
