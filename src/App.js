import React from 'react';
import './App.css';

import Home from './pages/user/Home/index';
import ProductShow from './pages/user/Product/show';
import Category from './pages/user/category/index';
import Cart from './pages/user/cart/index';
import Checkout from './pages/user/checkout/index';
import Account from './pages/user/account/master';

// Auth
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Reset from './pages/auth/reset';

// Admin
import AdminMaster from './pages/admin/master';

import NotFound from './pages/pageNotFound/index';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
          {/* <Route component={Home} /> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
