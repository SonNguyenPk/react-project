import { combineReducers } from 'redux';
import cartReducer from 'src/features/ShoppingCarts/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
