export const filterArray = (array) => {
  return array.reduce((acc, curr) =>
    ({ ...acc, [curr.type]: [...acc[curr.type] || [], curr] }), {})
};

export const calculationTotalCost = (bun, notBun) => {
  const bunPrice = bun ? bun.price : 0;

  return bunPrice * 2 + notBun.reduce((res, el) => res += el.price, 0)
};

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
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

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
};
