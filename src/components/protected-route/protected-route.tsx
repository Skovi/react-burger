import React, { FC } from 'react';
import styles from "./protected-route.module.css";
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from "react-redux";

export const ProtectedRoute: FC<RouteProps>= ({ children, ...rest }) => {
  const { isAuth } = useSelector((store: {user: {isAuth: boolean}}) => store.user);
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
