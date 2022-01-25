import React, { useState } from "react";
import styles from "./login.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import { login } from '../../services/actions/user';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

export const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuth } = useSelector(store => store.user);

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  
  //изменение данных в форме
  const onChangeInput = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  //отправка формы
  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(login(state));
  };

  //нажатие на иконку
  const onIconClick = () => {
    console.log('Click!');
  };

  if (isAuth) {
    return (
      <Redirect
      to={ location.state?.from.pathname || '/' }
      />
    );
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={onSubmitForm}
        className={`${styles.form} mb-20`}
      >
        <h1 className="text text_type_main-medium">Вход</h1>
        <EmailInput
          value={state.email}
          name="email"
          onChange={onChangeInput}
          onIconClick={onIconClick}
        />
        <PasswordInput
          value={state.password}
          name="password"
          onChange={onChangeInput}
          onIconClick={onIconClick}
        />
        <Button
          type="primary"
          size="medium"
        >
          Войти
        </Button>
      </form>
      <div className={styles.link_container}>
        <p className="text text_type_main-default text_color_inactive mr-2">Вы - новый пользователь?</p>
        <Link
          to="/register"
          className={`${styles.link} text text_type_main-default`}
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.link_container}>
        <p className="text text_type_main-default text_color_inactive mr-2">Вы забыли пароль?</p>
        <Link
          to='/forgot-password'
          className={`${styles.link} text text_type_main-default`}
        >
          Восстановить пароль
        </Link>
      </div>
    </div>
  )
};
