import { TIngredient } from "../types";

 type TPropsSetCookie = {
	expires?: number | string;
	path?: string;
} & { [extraParams: string]: string | number | boolean; }

export const filterArray = (array: Array<TIngredient>) => {
  return array.reduce((acc: { [name: string]: Array<TIngredient> }, curr) =>
    ({ ...acc, [curr.type]: [...acc[curr.type] || [], curr] }), {})
};

export const calculationTotalCost = (bun: TIngredient, notBun: Array<TIngredient>) => {
  const bunPrice = bun ? bun.price : 0;

  return bunPrice * 2 + notBun.reduce((res, el) => res += el.price, 0)
};

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function setCookie(name: string, value: string | number | boolean, props?: TPropsSetCookie) {
  props = props || {};
  let exp = props.expires;
  const d = new Date();
  if (typeof exp == "number" && exp) {
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = Number(d);
  }
  if (exp && d.toUTCString) {
    props.expires = d.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  };
  document.cookie = `${updatedCookie}; max-age=1200`;
};

export function deleteCookie(name: string) {
  setCookie(name, false, { expires: -1 });
};
