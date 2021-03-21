import { combineReducers } from 'redux';
import cartReducer from 'src/features/ShoppingCarts/cartReducer';

const rootReducer = combineReducers({
  carts: cartReducer,
});

export default rootReducer;
