import React from 'react';
import styles from "./profile.module.css";
import { Switch, NavLink, Route } from 'react-router-dom';
import { OrderHistory } from '../../components/order-history/order-history';
import { FormUser } from '../../components/form-user/form-user';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/actions/user';

export const Profile = () => {
  const dispatch = useDispatch();

  //нажатие на кнопку Выход
  const onExitClick = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.links} mr-15`}>
        <NavLink
          to='/profile'
          exact
          className="text text_type_main-medium text_color_inactive"
          activeClassName={styles.linkActive}
        >
          Профиль
        </NavLink>
        <NavLink
          to='/profile/orders'
          exact
          className="text text_type_main-medium text_color_inactive"
          activeClassName={styles.linkActive}
        >
          История заказов
        </NavLink>
        <NavLink
          to='/login'
          exact
          className="text text_type_main-medium text_color_inactive mb-20"
          activeClassName={styles.linkActive}
          onClick={onExitClick}
        >
          Выход
        </NavLink>
        <p className={`${styles.p} text text_type_main-default`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>

      <Switch>
        <Route
          path="/profile"
          exact
        >
          <FormUser />
        </Route>

        <Route
          path="/profile/orders"
          exact
        >
          <OrderHistory />
        </Route>
      </Switch>
    </div>
  )
};
