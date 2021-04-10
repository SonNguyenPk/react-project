import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PageNotFound from 'src/components/PageNotFound';
import AddEditProduct from 'src/features/products/pages/AddEditProduct';
import ProductDetail from 'src/features/products/pages/DetailProduct';
import ProductsData from 'src/features/products//pages/productList';

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
