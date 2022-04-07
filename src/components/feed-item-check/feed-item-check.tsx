import { FC } from "react";
import {
  TIngredient,
  TOrder,
} from "../../types";
import { FeedItemTrue } from "./feed-item-true";
import { useSelector } from "../../utils/hooks";

type TProps = {
  item: TOrder
};

export const FeedItemCheck: FC<TProps> = ({ item }) => {
  const { allIngredients } = useSelector((store) => store.ingredients);

  function checkIngredients(array: Array<string | null>) {
    let hasBun = false;
    let hasOtherIngredient = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == null) {
        return false;
      }
      let ingredient = allIngredients.find((item: TIngredient) => item._id === array[i]);
      if (ingredient?.type === 'bun') {
        hasBun = true
      }
      if (ingredient?.type !== 'bun') {
        hasOtherIngredient = true
      }
    }
    if (hasBun && hasOtherIngredient) {
      return true
    }
    return false
  };

  return (
    <>
      {checkIngredients(item.ingredients) ?
        (<FeedItemTrue allIngredients={allIngredients} item={item} />)
        : ''}
    </>
  )
};
