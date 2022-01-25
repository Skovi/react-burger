import {
  useState,
  useRef,
  useEffect
} from "react";
import styles from "./burger-ingredients.module.css";
import { useSelector } from 'react-redux';
import { BurgerIngredientsList } from "../burger-ingredients-list/burger-ingredients-list";
import { Tabs } from "../tabs/tabs";

export const BurgerIngredients = () => {

  const { bun, sauce, main } = useSelector(store => store.ingredients.allIngredients);

  const [type, setType] = useState('bun');

  useEffect(() => {
    document.querySelector(`#${type}`).scrollIntoView();
  }, [type]);

  const rootRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handlerScroll = () => {
    const bunType = Math.abs(rootRef.current.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top);
    const sauceType = Math.abs(rootRef.current.getBoundingClientRect().top - sauceRef.current.getBoundingClientRect().top);
    const mainType = Math.abs(rootRef.current.getBoundingClientRect().top - mainRef.current.getBoundingClientRect().top);
    const minType = Math.min(bunType, sauceType, mainType);
    const currentType = minType === bunType ? 'bun' : minType === sauceType ? 'sauces' : 'main';
    setType(type => currentType === type ? type : currentType);
  };

  return (
    <section className={styles.container}>
      <h1 className={`text_type_main-large mb-5`}>Соберите бургер</h1>
      <Tabs type={type} onClick={setType} />

      <section className={styles.containerIngredients} ref={rootRef} onScroll={handlerScroll}>
        <BurgerIngredientsList title='Булки' array={bun} id="bun" ref={bunRef} />
        <BurgerIngredientsList title='Соусы' array={sauce} id='sauces' ref={sauceRef} />
        <BurgerIngredientsList title='Начинки' array={main} id='main' ref={mainRef} />
      </section>
    </section>
  )
};
