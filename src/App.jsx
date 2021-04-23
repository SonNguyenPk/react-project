import { Route, Switch } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/PageNotFound';
import Header from './features/Header';
import HomePage from './features/Home';
import ProductFeature from './features/products';
import AddEditProduct from './features/products/pages/AddEditProduct';
import SearchPage from './features/Search';
import ShoppingCartFeature from './features/ShoppingCarts';
import { router } from 'src/utilise/routerLink';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={router.home} component={HomePage} />
        <Route path={router.products} component={ProductFeature} />
        <Route path={router.addProduct} component={AddEditProduct} />
        <Route path={router.carts} component={ShoppingCartFeature} />
        <Route path={`${router.search}/:search`} component={SearchPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
