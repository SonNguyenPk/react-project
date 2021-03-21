import { Container } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateFromCart } from './cartActions';
import CartContent from './component';

function ShoppingCartFeature(props) {
  const cartProducts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const handleRemoveCartItem = (item) => {
    const action = removeFromCart(item);
    dispatch(action);
  };

  const handleUpdate = (data, product) => {
    const action = updateFromCart(data, product);
    console.log({ action });
    dispatch(action);
  };
  return (
    <div>
      <Container>
        <h2>Your Shopping Carts</h2>
        <CartContent
          cartProducts={cartProducts}
          onRemove={handleRemoveCartItem}
          onUpdate={handleUpdate}
        />
      </Container>
    </div>
  );
}

export default ShoppingCartFeature;
