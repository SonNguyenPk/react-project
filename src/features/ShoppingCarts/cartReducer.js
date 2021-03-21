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
    // add to cart from product detail
    case 'cart/addToCart': {
      const newClone = { ...state };
      const newCartItems = [...newClone.cartItems];
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
      newCartItems[idx] = newItem;

      const newCloneState = {
        cartItems: newCartItems,
        totalQuantity: newTotalQuantity,
        totalCharge: newTotalCharge,
      };
      return newCloneState;
    }

    // update/remove product quantity from cart feature
    case 'cart/updateProductQuantity': {
      const newClone = { ...state };
      const newCartItems = [...newClone.cartItems];
      const idx = newCartItems.findIndex((item) => item.id === action.payload.id);

      const addQuantity = action.payload.productQuantity;
      const addCharge = addQuantity * action.payload.product.salePrice;

      const deleteQuantity = newCartItems[idx].productQuantity;
      const deleteCharge = deleteQuantity * newCartItems[idx].product.salePrice;
      console.log({ addQuantity, addCharge, deleteCharge });

      const newTotalQuantity = newClone.totalQuantity - deleteQuantity + addQuantity;
      const newTotalCharge = newClone.totalCharge - deleteCharge + addCharge;

      const newItem = { ...newCartItems[idx], productQuantity: addQuantity };
      newCartItems[idx] = newItem;

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
