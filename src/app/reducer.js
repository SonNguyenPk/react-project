import { combineReducers } from 'redux';
import searchReducer from 'src/features/Header/searchReducer';
import cartReducer from 'src/features/ShoppingCarts/cartReducer';

const rootReducer = combineReducers({
  carts: cartReducer,
  search: searchReducer,
});

export default rootReducer;
