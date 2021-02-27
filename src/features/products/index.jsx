<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ProductsData from './pages/productList';
import ProductDetail from './pages/detailProduct';
import AddEditProduct from './pages/AddEditProduct';
=======
import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditProduct from './pages/AddEditProduct';
import ProductDetail from './pages/DetailProduct';
import ProductsData from './pages/ProductList';
>>>>>>> origin/feature/products-addform

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Container>
        <h2> Product Feature</h2>
        <Switch>
          <Route exact path={match.path} component={ProductsData} />
          <Route
            path={`${match.path}/product-detail/:productId`}
            component={ProductDetail}
          />
          <Route path={`${match.path}/add`} component={AddEditProduct} />
          <Route path={`${match.path}/edit/:productId`} component={AddEditProduct} />
        </Switch>
      </Container>
    </div>
  );
}

export default ProductFeature;
