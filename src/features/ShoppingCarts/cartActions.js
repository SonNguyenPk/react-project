export const addToCart = (quantity, product) => ({
  type: 'cart/addToCart',
  payload: {
    id: product.id,
    productQuantity: quantity.productQuantity,
    product: product,
  },
});

export const removeFromCart = (product) => ({
  type: 'cart/removeFromCart',
  payload: {
    ...product,
  },
});
