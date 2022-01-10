export const filterArray = (array) => {
  return array.reduce((acc, curr) =>
    ({ ...acc, [curr.type]: [...acc[curr.type] || [], curr] }), {})
}

export const calculationTotalCost = (bun, notBun) => {
  const bunPrice = bun ? bun.price : 0;

  return bunPrice * 2 + notBun.reduce((res, el) => res += el.price, 0)
}
