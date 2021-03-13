import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import HomePage from './features/Home';
import ProductFeature from './features/products';
import ShoppingCartFeature from './features/ShoppingCarts';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/carts" component={ShoppingCartFeature} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
