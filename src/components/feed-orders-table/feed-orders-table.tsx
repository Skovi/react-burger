import { FC } from 'react';
import styles from './feed-orders-table.module.css';
import { TOrder } from '../../types';
import { useSelector } from '../../utils/hooks';

type TProps = {
  doneArray: Array<TOrder>,
  pendingArray: Array<TOrder>,
};

export const FeedOrdersTable: FC<TProps> = ({ doneArray, pendingArray }) => {
  const { total, totalToday } = useSelector((store) => store.socket);

  const colorStyle = { color: '#00cccc' };

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.list_status}>
          <p className={`text text_type_main-medium mb-6`}>Готовы:</p>
          <ul className={styles.list}>
            {doneArray?.map((item) => <li className={`${styles.li} text text_type_digits-default pt-2 pb-2`} key={item.number} style={colorStyle} >{item.number}</li>)}
          </ul>
        </div>
        <div className={styles.list_status}>
          <p className="text text_type_main-medium  mb-6">В работе:</p>
          <ul className={styles.list}>
            {pendingArray?.map((item) => <li className={`${styles.li} text text_type_digits-default pt-2 pb-2`} key={item.number}>{item.number}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <p className="text text_type_main-medium pt-15">Выполнено за все время:</p>
        <p className={`${styles.count} text text_type_digits-large`}>{total}</p>
      </div>
      <div>
        <p className="text text_type_main-medium pt-15">Выполнено за сегодня:</p>
        <p className={`${styles.count} text text_type_digits-large`}>{totalToday}</p>
      </div>
    </div>
  )
};
