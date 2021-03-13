import React from 'react';
import { useSelector } from 'react-redux';
import HeaderComponent from './component/header';

function Header(props) {
  const carts = useSelector(state => state.carts)
  return (
    <div>
      <HeaderComponent totalQuantity ={}/>
    </div>
  );
}

export default Header;
