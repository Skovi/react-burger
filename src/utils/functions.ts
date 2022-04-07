import { 
  TGetIngredientsObjWithCount, 
  TIngredient, 
  TOrder,
 } from "../types";

type TPropsSetCookie = {
  expires?: number | string;
  path?: string;
} & { [extraParams: string]: string | number | boolean; }

export const filterArray = (array: Array<TIngredient>): { [name: string]: Array<TIngredient> } => {
  const allIngredients = array.reduce(
    (acc: { [name: string]: Array<TIngredient> }, curr) =>
    ({
      ...acc,
      [curr.type]: [...acc[curr.type] || [], curr]
    }),
    {}
  );
  return allIngredients
};

export const calculationTotalCost = (bun: TIngredient, notBun: Array<TIngredient>) => {
  const bunPrice = bun ? bun.price : 0;

  return bunPrice * 2 + notBun.reduce((res, el) => res += el.price, 0)
};

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp("(?:^|; )" +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function setCookie(
  name: string,
  value: string,
  props: { [key: string]: string | number | Date | boolean } = {}
) {
  props = {
    path: "/",
    ...props,
  };

  let exp = props.expires;
  if (exp && typeof exp === "number") {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  };

  if (exp && exp instanceof Date) {
    props.expires = exp.toUTCString();
  };
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export function deleteCookie(name: string) {
  setCookie(name, "", { expires: -1 });
};

export const filterOrdersByStatus = (arr: Array<TOrder>) => {
  return arr?.reduce((acc: { [name: string]: Array<TOrder> }, curr) => {
    curr.status === 'done' ? acc['done'] = [...acc['done'], curr] : acc['pending'] = [...acc['pending'], curr]
    return acc;
  }, { done: [], pending: [] })
};

export const statusColor = (status: string) =>
  status === 'done'
    ? { text: 'Выполнен', textColor: 'green' }
    : status === 'pending'
      ? { text: 'Отменен', textColor: 'yellow' }
      : { text: 'Готовится', textColor: 'white' };

//найти текущий заказ
export const filterOrders = (arr: Array<TOrder>, id: string) => {
  return arr?.filter((el: TOrder) => el.number === Number(id))[0]
};

//получить стоимость бургера
export const getBurgerPrice = (array: Array<TIngredient> | undefined) =>
  array?.reduce((acc, curr) => acc += curr?.price, 0);


//получить дату создания заказа
const getDaysForCard = (days: number) => (
  days === 0 ? 'Сегодня'
    : days === 1 ? 'Вчера'
      : days > 1 ? `${days} дня(-ей) назад`
        : 'Что-то пошло не так:(');

//форматировать дату
export const orderDate = (date: string) => {
  const dayCreated: Date = new Date(date);
  const today: Date = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime: number = Math.ceil((today.getTime() - dayCreated.getTime()) / (60 * 60 * 24 * 1000));
  const hours = dayCreated.getHours() > 9 ? dayCreated.getHours() : `0${dayCreated.getHours()}`
  const min = dayCreated.getMinutes() > 9 ? dayCreated.getMinutes() : `0${dayCreated.getMinutes()}`

  return `${getDaysForCard(diffTime)}, ${hours}:${min} i-GMT+${dayCreated.getTimezoneOffset() * (-1) / 60}`;
};

//получить объект со счетчиком ингредиентов и ингредиентами
export const getIngredientsObjWithCount = (arr: Array<TIngredient>) =>
  arr?.reduce(
    (acc: TGetIngredientsObjWithCount, curr: TIngredient) => {
      const id = curr._id;
      acc.item[id] = curr;
      acc.count[id] = (acc.count[id] || 0) + 1;
      return acc;
    },
    { item: {}, count: {} }
  );

export const getIngredientsOrder = (order: TOrder, allIngredients: Array<TIngredient>) =>
  order.ingredients.map(
    (el) => {
      const item = allIngredients.filter(
        (order: TIngredient) =>
          order._id === el
      )
      return item[0];
    }
  );