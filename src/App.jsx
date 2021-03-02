import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import HomePage from './features/Home';
import ProductFeature from './features/products';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductFeature} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
