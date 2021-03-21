import { Container } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './cartActions';
import CartContent from './component';

function ShoppingCartFeature(props) {
  const cartProducts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const handleRemoveCartItem = (item) => {
    const action = removeFromCart(item);
    console.log({ action });
    dispatch(action);
  };
  return (
    <div>
      <Container>
        <h2>Your Shopping Carts</h2>
        <CartContent cartProducts={cartProducts} onRemove={handleRemoveCartItem} />
      </Container>
    </div>
  );
}

export default ShoppingCartFeature;
