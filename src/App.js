import React from 'react';
import './App.css';

import Home from './components/user/Home/index';
import ProductShow from './components/user/Product/show';
import Category from './components/user/category/index';
import Cart from './components/user/cart/index';
import Checkout from './components/user/checkout/index';
import Account from './components/user/account/master';

// Auth
import Login from './components/auth/login';
import Register from './components/auth/register';
import Reset from './components/auth/reset';

// Admin
import AdminMaster from './components/admin/master';

import NotFound from './components/pageNotFound/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          {/* User Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductShow} /> 
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/account" component={Account} />

          {/* Auth Routes */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset" component={Reset} />

          {/* Admin Routes */}
          <Route path="/admin" component={AdminMaster} />

          <Route component={NotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
