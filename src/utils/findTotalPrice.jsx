export const findTotalPrice = (cart) =>
  cart.reduce((total, product) => total + product.price, 0);
