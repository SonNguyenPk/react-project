//add new quantity to cart, received product from product detail
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

// replace quantity of existing product in cart, received product from redux state
export const updateFromCart = (quantity, product) => ({
  type: 'cart/updateProductQuantity',
  payload: {
    ...product,
    productQuantity: quantity.productQuantity,
  },
});
