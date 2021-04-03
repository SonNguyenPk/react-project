import React from 'react';
import { useSelector } from 'react-redux';
import HeaderComponent from 'src/components/Header/Header';

function Header(props) {
  const carts = useSelector((state) => state.carts);
  const totalCartQuantity = carts.totalQuantity;
  return (
    <div>
      <HeaderComponent totalQuantity={totalCartQuantity} />
    </div>
  );
}

export default Header;
