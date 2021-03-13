import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import CartContent from './component';

function ShoppingCartFeature(props) {
  const cartProducts = useSelector((state) => state.cart);
  const totalQuantity = cartProducts.forEach(element => {
    
  });
  console.log({ cartProducts });
  return (
    <div>
      <Container>
        <CartContent cartItems={cartProducts} />
      </Container>
    </div>
  );
}

export default ShoppingCartFeature;
