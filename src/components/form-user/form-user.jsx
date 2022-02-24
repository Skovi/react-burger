import {
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

  const { user } = useSelector(store => store.user);

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
  const onSubmitForm = (e) => {
    e.preventDefault();

    const newDataUser = {
      name: state.name !== user.name ? state.name : user.name,
      email: state.email !== user.email ? state.email : user.email,
      password: state.password,
    };

    dispatch(updateUser(newDataUser));
  };

  //нажатие на кнопку Отмена
  const onCancel = (e) => {
    e.preventDefault();
    setState({
      name: user.name,
      email: user.email,
      password: '',
    });
  };

  const hasName = state.name !== user.name; //изменено имя
  const hasEmail = state.email !== user.email; //изменена почта
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
        icon=''
        onChange={onChangeInput}
        value={user.name ? user.name : state.name}
        onIconClick={onIconClick}
      />
      <EmailInput
        value={user.email ? user.email : state.email}
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
