import React, {
  useState,
  useEffect
} from 'react';
import styles from './form-user.module.css';
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  getUser,
  updateUser
} from '../../services/actions/user';

export const FormUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  type TUser = {
    name: string, 
    email: string
  }

  const { name, email } = useSelector((store: {user: TUser}) => store.user);

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

    const newDataUser = {
      name: state.name !== name ? state.name : name,
      email: state.email !== email ? state.email : email,
      password: state.password,
    };

    dispatch(updateUser(newDataUser));
  };

  //нажатие на кнопку Отмена
  const onCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setState({
      name: name,
      email: email,
      password: '',
    });
  };

  const hasName = state.name !== name; //изменено имя
  const hasEmail = state.email !== email; //изменена почта
  const hasState = !!state.email && !!state.name; //поле имя и почта заполнены

  return (
    <form className={`${styles.form}`} onSubmit={onSubmitForm}>
      <Input
        type='text'
        placeholder={'Имя'}
        name='name'
        error={false}
        errorText='Ошибка'
        size='default'
        onChange={onChangeInput}
        value={name ? name : state.name}
      />
      <EmailInput
        value={email ? email : state.email}
        name="email"
        onChange={onChangeInput}
      />
      <PasswordInput
        value={state.password}
        name="password"
        onChange={onChangeInput}
      />

      {(hasName || hasState) && (hasEmail || hasState) && (!!state.password && hasState)
        ? (<div className={styles.buttons} onClick={onCancel} >
          <span className={styles.button}>
            Отмена
          </span>
          <Button type='primary' size='medium'>
            Сохранить
          </Button>
        </div>) : null}
    </form>
  )
};
