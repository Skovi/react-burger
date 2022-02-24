import React, { useState } from "react";
import styles from "./register.module.css";
import {
  Link,
  Redirect,
} from 'react-router-dom';
import {
  Button,
  Input,
  PasswordInput,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { register } from "../../services/actions/user";

export const Register = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((store:{user: { isAuth: boolean}}) => store.user);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  //изменение данных в форме
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //отправка формы
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(state));
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

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitForm} className={`${styles.form} mb-20`}>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <Input
          type={'text'}
          placeholder={'Имя'}
          value={state.name}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          onChange={onChangeInput}
          icon='EditIcon'
        />
        <EmailInput
          value={state.email}
          name="email"
          onChange={onChangeInput}
        />
        <PasswordInput
          value={state.password}
          name={'password'}
          onChange={onChangeInput}
        />
        <Button type='primary' size='medium'>
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.link_container}>
        <p className="text text_type_main-default text_color_inactive mr-2">Уже зарегистрированы?</p>
        <Link
          to='/login'
          className={`${styles.link} text text_type_main-default`}
        >
          Войти
        </Link>
      </div>
    </div>
  )
};
