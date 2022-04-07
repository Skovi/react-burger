import {
  useState,
  useRef,
  useEffect
} from "react";
import styles from "./burger-ingredients.module.css";
import { BurgerIngredientsList } from "../burger-ingredients-list/burger-ingredients-list";
import { Tabs } from "../tabs/tabs";
import { filterArray } from "../../utils/functions";
import { useSelector } from "../../utils/hooks";

export const BurgerIngredients = () => {

  const { allIngredients } = useSelector((store) => store.ingredients);

  const allIngredientsArray = filterArray(allIngredients);

  const [type, setType] = useState('bun');

  useEffect(() => {
    const scrollElement = document.querySelector(`#${type}`);
    if (scrollElement !== null) {
      scrollElement.scrollIntoView();
    }
  }, [type]);

  const rootRef = useRef<HTMLElement>(null);
  const bunRef = useRef<HTMLParagraphElement>(null);
  const sauceRef = useRef<HTMLParagraphElement>(null);
  const mainRef = useRef<HTMLParagraphElement>(null);

  const handlerScroll = () => {
    const bunType = Math.abs(rootRef.current!.getBoundingClientRect().top - bunRef.current!.getBoundingClientRect().top);
    const sauceType = Math.abs(rootRef.current!.getBoundingClientRect().top - sauceRef.current!.getBoundingClientRect().top);
    const mainType = Math.abs(rootRef.current!.getBoundingClientRect().top - mainRef.current!.getBoundingClientRect().top);
    const minType = Math.min(bunType, sauceType, mainType);
    const currentType = minType === bunType ? 'bun' : minType === sauceType ? 'sauces' : 'main';
    setType(type => currentType === type ? type : currentType);
  };

  return (
    <section className={styles.container}>
      <h1 className={`text_type_main-large mb-5`}>Соберите бургер</h1>
      <Tabs type={type} onClick={setType} />

      <section className={styles.containerIngredients} ref={rootRef} onScroll={handlerScroll}>
        <BurgerIngredientsList title='Булки' array={allIngredientsArray.bun} id="bun" ref={bunRef} />
        <BurgerIngredientsList title='Соусы' array={allIngredientsArray.sauce} id='sauces' ref={sauceRef} />
        <BurgerIngredientsList title='Начинки' array={allIngredientsArray.main} id='main' ref={mainRef} />
      </section>
    </section>
  )
};
