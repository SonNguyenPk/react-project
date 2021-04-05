import { Container } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import PageNotFound from 'src/components/PageNotFound';
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
          <Route exact path={match.url} component={ProductsData} />
          <Route
            path={`${match.path}/product-detail/:productId`}
            component={ProductDetail}
          />
          <Route path={`${match.path}/edit/:productId`} component={AddEditProduct} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default ProductFeature;
