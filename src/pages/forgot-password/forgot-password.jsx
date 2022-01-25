import React, { useState } from 'react';
import styles from "./forgot-password.module.css";
import {
  Link,
  Redirect
} from 'react-router-dom';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { forgotPassword } from '../../services/actions/password';

export const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector(store => store.user);

  const hasForgotPasswordRequest = useSelector(store => store.password.forgotPasswordRequest);

  const [email, setEmailValue] = useState("");

  //изменение данных в форме
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  //отправка формы
  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  //нажатие на иконку
  const onIconClick = () => {
    console.log('Click!');
  };

  if (isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  };

  if (hasForgotPasswordRequest) {
    return (
      <Redirect
        to={{
          pathname: 'reset-password'
        }}
      />
    );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitForm} className={`${styles.form} mb-20`}>
        <h1 className="text text_type_main-medium">
          Восстановление пароля
        </h1>
        <EmailInput
          onChange={onChangeEmail}
          value={email}
          name="email"
          onIconClick={onIconClick}
          icon='CloseIcon'
        />
        <Button
          type='primary'
          size='medium'
        >
          Восстановить
        </Button>
      </form>
      <div className={styles.link_container}>
        <p className="text text_type_main-default text_color_inactive mr-2">
          Вспомнили пароль?
        </p>
        <Link
          to="/login"
          className={`${styles.link} text text_type_main-default`}
        >
          Войти
        </Link>
      </div>
    </div>
  )
};
