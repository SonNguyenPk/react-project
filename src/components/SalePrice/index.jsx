import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

SalePriceComponent.propTypes = {
  product: PropTypes.object,
};

function SalePriceComponent({ product }) {
  return (
    <div>
      {product.promotionPercent !== 0 && (
        <Box
          display="flex"
          flexWrap="noWrap"
          flexDirection="row"
          component="span"
          mt={2}
          mb={2}
        >
          <Typography variant="h6" color="textPrimary" component="h6">
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'VND',
            }).format(product.salePrice)}
          </Typography>
          <Typography variant="body" color="textPrimary" component="p">
            {`-${product.promotionPercent}%`}
          </Typography>
          <Typography
            style={{ textDecoration: 'line-through' }}
            variant="body"
            color="textSecondary"
            component="p"
          >
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'VND',
            }).format(product.originalPrice)}
          </Typography>
        </Box>
      )}
      {product.promotionPercent === 0 && (
        <Box mt={2} mb={2}>
          <Typography variant="h5" color="textPrimary" component="h6">
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'VND',
            }).format(product.originalPrice)}
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default SalePriceComponent;
