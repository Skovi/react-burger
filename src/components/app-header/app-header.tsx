import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink, useLocation } from 'react-router-dom';

export const AppHeader = () => {
  const { pathname } = useLocation();

  const iconBurger = pathname === "/" ? "primary" : "secondary";
  const iconProfile = pathname === "/profile" ? "primary" : "secondary";
  const iconFeed = pathname === "/feed" ? "primary" : "secondary";

  return (
    <header>
      <nav className={styles.content}>
        <div className={styles.twoA}>
          <div className={styles.firstCont}>
            <BurgerIcon type={iconBurger} />
            <NavLink
              to='/'
              exact
              className={` text text_type_main-default text_color_inactive ml-2`}
              activeClassName={styles.linkActive}
            >
              Конструктор
            </NavLink>
          </div>

          <div className={styles.secondCont}>
            <ListIcon type={iconFeed} />
            <NavLink
              to='/feed'
              className={` text text_type_main-default text_color_inactive ml-2`}
              activeClassName={styles.linkActive}
            >
              Лента заказов
            </NavLink>
          </div>
        </div>

        <NavLink
          to='/'
          className={styles.logo}
        >
          <Logo />
        </NavLink>

        <div className={styles.thirdCont}>
          <ProfileIcon type={iconProfile} />
          <NavLink
            to='/profile'
            className={`${styles.thirdA} text text_type_main-default text_color_inactive ml-2`}
            activeClassName={styles.linkActive}
          >
            Личный кабинет
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
