import React, { useState } from 'react';
import styles from "./reset-password.module.css";
import { Link, Redirect } from 'react-router-dom';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { resetPassword } from "../../services/actions/password";

export const ResetPassword = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    password: '',
    token: '',
  });

  //изменение данных в форме
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //нажатие на иконку
  const onIconClick = () => {
    console.log('Click!');
  };

  //отправка формы
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(state));
  };

  const { isAuth } = useSelector((store:{user: { isAuth: boolean}}) => store.user);

  if (isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/'
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
        <PasswordInput
          value={state.password}
          name='password'
          onChange={onChangeInput}
        />
        <Input
          type='text'
          placeholder='Введите код из письма'
          onChange={onChangeInput}
          value={state.token}
          name='token'
          error={false}
          onIconClick={onIconClick}
          errorText='Ошибка'
          size='default'
          icon='EditIcon'
        />
        <Button
          type='primary'
          size='medium'
        >
          Сохранить
        </Button>
      </form>
      <div className={styles.link_container}>
        <p className="text text_type_main-default text_color_inactive mr-2">
          Вспомнили пароль?
        </p>
        <Link
          to='/forgot-password'
          className={`${styles.link} text text_type_main-default`}
        >
          Войти
        </Link>
      </div>
    </div>
  )
};
