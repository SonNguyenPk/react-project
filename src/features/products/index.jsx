import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PageNotFound from 'src/components/PageNotFound';

import { router } from 'src/utilise/routerLink';
import AddEditProduct from './pages/AddEditProduct';
import ProductDetail from './pages/DetailProduct';
import ProductsData from './pages/productList';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  console.log('match main', match);
  return (
    <div>
      <Container>
        <Switch>
          <Route exact path={router.products} component={ProductsData} />
          <Route path={`${router.productDetail}/:productId`} component={ProductDetail} />
          <Route path={`${router.editProduct}/:productId`} component={AddEditProduct} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default ProductFeature;
