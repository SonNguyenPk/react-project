const initialState = {
  cartItems: [
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
      const newClone = { ...state };
      console.log({ newClone });
      const newCartItems = [...newClone.cartItems];
      console.log({ newCartItems });
      const idx = newCartItems.findIndex((item) => item.id === action.payload.id);
      const addQuantity = action.payload.productQuantity;
      const addCharge = addQuantity * action.payload.product.salePrice;
      const newTotalQuantity = newClone.totalQuantity + addQuantity;
      const newTotalCharge = newClone.totalCharge + addCharge;
      if (idx <= 0) {
        newCartItems.push(action.payload);

        const newCloneState = {
          cartItems: newCartItems,
          totalQuantity: newTotalQuantity,
          totalCharge: newTotalCharge,
        };
        return newCloneState;
      }
      const newQuantity =
        newCartItems[idx].productQuantity + action.payload.productQuantity;
      const newItem = { ...newCartItems[idx], productQuantity: newQuantity };
      console.log({ newItem });
      newCartItems[idx] = newItem;
      console.log({ newCartItems });
      const newCloneState = {
        cartItems: newCartItems,
        totalQuantity: newTotalQuantity,
        totalCharge: newTotalCharge,
      };
      return newCloneState;
    }
    case 'cart/removeFromCart': {
      const newClone = { ...state };
      const newCloneCartItem = [...newClone.cartItems];

      const newTotalQuantity = newClone.totalQuantity - action.payload.productQuantity;
      const salePriceProduct = action.payload.product.salePrice;
      const chargeDecrement = salePriceProduct * action.payload.productQuantity;
      const newTotalCharge = newClone.totalCharge - chargeDecrement;

      const newCartItem = newCloneCartItem.filter(
        (product) => action.payload.id !== product.id
      );
      return {
        ...state,
        cartItems: newCartItem,
        totalQuantity: newTotalQuantity,
        totalCharge: newTotalCharge,
      };
    }
    default:
      return state;
  }
}
