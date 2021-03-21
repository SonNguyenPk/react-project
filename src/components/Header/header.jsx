import React from 'react';
import HeaderDesktop from './desktop';
import HeaderMobile from './mobile';
import PropTypes from 'prop-types';

HeaderComponent.propTypes = {
  totalQuantity: PropTypes.number,
};

HeaderComponent.defaultProps = {
  totalQuantity: 0,
};

function HeaderComponent({ totalQuantity }) {
  return (
    <div>
      <HeaderDesktop totalQuantity={totalQuantity} />
      <HeaderMobile totalQuantity={totalQuantity} />
    </div>
  );
}

export default HeaderComponent;
