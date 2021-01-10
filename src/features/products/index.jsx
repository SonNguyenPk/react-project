import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ProductsData from './pages/productList';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      <Container>
        <h2> Product Feature</h2>
        <Switch>
          <Route exact path="/products" component={ProductsData} />
        </Switch>
      </Container>
    </div>
  );
}

export default ProductFeature;
