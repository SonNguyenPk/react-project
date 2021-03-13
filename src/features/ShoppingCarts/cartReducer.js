const initialState = {
  cartItem: [
    {
      id: '',
      productQuantity: 0,
      product: {},
    },
  ],
  totalQuantity: 0,
  totalCharge: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'cart/addToCart': {
      // const newCloneState = [...state];
      const newCartItem = [...state.cartItem];
      const idx = newCartItem.findIndex((item) => item.id === action.payload.id);
      const addQuantity = action.payload.productQuantity;
      const addCharge = addQuantity * action.payload.product.salePrice;
      const newTotalQuantity = state.totalQuantity + addQuantity;
      const newTotalCharge = state.totalCharge + addCharge;
      console.log({ idx });
      if (idx <= 0) {
        newCartItem.push(action.payload);

        const newCloneState = {
          ...state,
          cartItem: newCartItem,
          totalQuantity: newTotalQuantity,
          totalCharge: newTotalCharge,
        };
        return newCloneState;
      }

      const newQuantity =
        newCartItem[idx].productQuantity + action.payload.productQuantity;
      console.log({ newQuantity });
      const newItem = { ...newCartItem[idx], productQuantity: newQuantity };
      newCartItem[idx] = newItem;

      const newCloneState = {
        ...state,
        cartItem: newCartItem,
        totalQuantity: newTotalQuantity,
        totalCharge: newTotalCharge,
      };
      return newCloneState;
    }
    case 'cart/removeFromCart': {
      const newState = [...state];
      const productId = action.payload.id;
      return newState.filter((product) => productId !== product.id);
    }
    default:
      return state;
  }
}
