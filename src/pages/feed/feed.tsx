import { useEffect } from "react";
import { filterOrdersByStatus } from "../../utils/functions";
import { FeedItemCheck } from "../../components/feed-item-check/feed-item-check";
import { FeedOrdersTable } from "../../components/feed-orders-table/feed-orders-table";
import styles from "./feed.module.css";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { TOrder } from "../../types";
import {
  SOCKET_CLOSE,
  SOCKET_CREATE,
} from "../../services/actions/socket-actions";
import {
  useDispatch,
  useSelector,
} from "../../utils/hooks";

export const Feed = () => {

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch({ type: SOCKET_CREATE });
      return () => {
        dispatch({ type: SOCKET_CLOSE })
      }
    }, [dispatch]
  );

  const location = useLocation();

  const { orders } = useSelector((store) => store.socket);

  const statusArray = filterOrdersByStatus(orders);

  const doneArray = statusArray?.done.slice(0, 10);

  const pendingArray = statusArray?.pending.slice(0, 10);

  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-large mb-5 mt-7">Лента заказов</h1>
      <div className={styles.content}>
        <ul className={styles.table}>
          {orders ? orders.map((item: TOrder) => {
            return (
              <Link
                to={{
                  pathname: `/feed/${item.number}`,
                  state: { background: location }
                }}
                key={item.number}
                style={{ color: '#ffffff' }}
              >
                <FeedItemCheck item={item} />
              </Link>
            )
          })
            : <p>Нет заказов</p>}
        </ul>
        <FeedOrdersTable doneArray={doneArray} pendingArray={pendingArray} />
      </div>
    </div>
  )
};
