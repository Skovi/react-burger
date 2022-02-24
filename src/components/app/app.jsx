import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { Main } from "../../pages/main/main";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/register/register";
import { ResetPassword } from "../../pages/reset-password/reset-password";
import { ForgotPassword } from "../../pages/forgot-password/forgot-password";
import { Profile } from "../../pages/profile/profile";
import { ProtectedRoute } from "../protected-route/protected-route";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/actions/user";

const ModalSwitch = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const hasToken = localStorage.getItem('refreshToken');
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (hasToken) {
      dispatch(getUser());
    };
  }, []);

  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login" exact> {/*страница авторизации*/}
          <Login />
        </Route>
        <Route path="/register" exact> {/*страница регистрации*/}
          <Register />
        </Route>
        <Route path="/forgot-password" exact> {/*страница восстановления пароля*/}
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact> {/*страница сброса пароля*/}
          <ResetPassword />
        </Route>
        <ProtectedRoute path="/profile"> {/*страница с настройками профиля*/}
          <Profile />
        </ProtectedRoute>
        <Route path="/ingredients/:id" exact> {/*страница ингредиента*/}
          <IngredientDetails />
        </Route>
      </Switch>
      {background && (
        <>
          <Route path='/' exact><Modal><OrderDetails /></Modal></Route>
          <Route path="/ingredients/:id" ><Modal><IngredientDetails /></Modal></Route>
        </>
      )}
    </>
  );
};

export const App = () => {

  return (
    <Router>
      <AppHeader />
      <ModalSwitch />
    </Router>
  );
};
