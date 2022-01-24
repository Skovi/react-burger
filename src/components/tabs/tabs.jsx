import styles from "./tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const Tabs = ({ type, onClick}) => {
  return (
  <div className={`text_type_main-default mb-10 ${styles.tab}`}>
        <Tab value='bun' active={type === 'bun'} onClick={onClick}>
          Булки
        </Tab>
        <Tab value='sauces' active={type === 'sauces'} onClick={onClick}>
          Соусы
        </Tab>
        <Tab value='main' active={type === 'main'} onClick={onClick}>
          Начинки
        </Tab>
      </div>
      )
};

Tabs.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};