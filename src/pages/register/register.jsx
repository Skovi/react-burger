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

  const { isAuth } = useSelector(store => store.user);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  //изменение данных в форме
  const onChangeInput = (e) => {
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
  const onSubmitForm = e => {
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
          onIconClick={onIconClick}
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
