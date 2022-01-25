import styles from "./protected-route.module.css";
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector(state => state.user);
  return (
    <>
      {<Route
        {...rest}
        render={({ location }) =>
          isAuth ? (
            children
          ) : (<Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />)}
      />}
    </>
  );
};
