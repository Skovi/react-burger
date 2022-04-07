import styles from './profile.module.css';
import {
  Switch,
  NavLink,
  Route,
  useLocation,
} from 'react-router-dom';
import { OrderHistory } from '../../components/order-history/order-history';
import { FormUser } from '../../components/form-user/form-user';
import { logout } from '../../services/actions/user/user';
import { useDispatch } from '../../utils/hooks';
import { Order } from '../order/order';
import { FC } from 'react';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const profileStyles = { margin: '29vh auto 0', justifyContent: 'flex-start' };
  const profileOrdersStyles = { margin: '52px auto 0' };
  const style =
    pathname === '/profile/orders' ? profileOrdersStyles : profileStyles;

  //нажатие на кнопку Выход
  const onExitClick = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container} style={style}>
      <div className={`${styles.links} mr-15`}>
        <NavLink
          to='/profile'
          exact
          className='text text_type_main-medium text_color_inactive'
          activeClassName={styles.linkActive}
          style={{ height: '64px' }}
        >
          Профиль
        </NavLink>
        <NavLink
          to='/profile/orders'
          exact
          className='text text_type_main-medium text_color_inactive'
          activeClassName={styles.linkActive}
          style={{ height: '64px' }}
        >
          История заказов
        </NavLink>
        <NavLink
          to='/login'
          exact
          className='text text_type_main-medium text_color_inactive'
          activeClassName={styles.linkActive}
          onClick={onExitClick}
          style={{ height: '64px' }}
        >
          Выход
        </NavLink>
        <p className={`${styles.p} text text_type_main-default mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Switch>
        <Route path='/profile' exact>
          <FormUser />
        </Route>
        <Route path='/profile/orders' exact>
          <OrderHistory />
        </Route>
        <Route path='/profile/orders/:number' exact>
          <Order />
        </Route>
      </Switch>
    </div>
  );
};