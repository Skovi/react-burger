import { useEffect } from "react";
import styles from "./order-history.module.css";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { FeedItemCheck } from "../feed-item-check/feed-item-check";
import {
  AUTH_SOCKET_CLOSE,
  AUTH_SOCKET_CREATE,
} from "../../services/actions/auth-socket-actions";
import {
  useDispatch,
  useSelector,
} from "../../utils/hooks";

export const OrderHistory = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch({ type: AUTH_SOCKET_CREATE });
      return () => {
        dispatch({ type: AUTH_SOCKET_CLOSE })
      }
    }, [dispatch]
  );

  const { orders } = useSelector((store) => store.authSocket);

  return (
    <ul className={styles.container}>
      {orders.map(item => {
        return (
          <Link
            to={{
              pathname: `/profile/orders/${item.number}`,
              state: { background: location }
            }}
            key={item._id}
          >
            <FeedItemCheck item={item} />
          </Link>
        )
      })}
    </ul>
  )
};
