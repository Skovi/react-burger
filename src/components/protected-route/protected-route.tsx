import { FC } from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import {  useSelector } from '../../utils/hooks';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
} & RouteProps;

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ onlyUnAuth = false, children, ...rest }) => {

  const { isAuth } = useSelector((store) => store.user);
  const location = useLocation<{ from: Location}>();


  if (onlyUnAuth && isAuth) {
    const { from } = location.state || { from: { pathname: "/" } };

    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  };

  if (!onlyUnAuth && !isAuth) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  };

  return <Route {...rest}>{children}</Route>;
};
