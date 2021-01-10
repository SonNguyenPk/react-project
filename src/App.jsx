import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductFeature from './features/products';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
