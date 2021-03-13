export const addToCart = (quantity, product) => ({
  type: 'cart/addToCart',
  payload: {
    id: product.id,
    productQuantity: quantity.productQuantity,
    product: product,
  },
});
