import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from './App';
import Category from './views/user/category/index';
import Cart from './views/user/cart/index';
import Checkout from './views/user/checkout/index';
import Account from './views/user/account/index';

import NotFound from './views/pageNotFound/index';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/category/:categoryName" component={Category} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/account" component={Account} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
