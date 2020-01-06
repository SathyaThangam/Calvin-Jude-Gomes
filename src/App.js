import React, { Component } from "react";
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

// import Navbar from "./components/Utils/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import WishList from './components/WishList/WishList';
import Cart from './components/CartList/CartList';
import Auth from './components/Utils/Auth';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          Auth.getAuth() ? (
            <Component {...props} />
          ) : (<Redirect to={{ pathname: "/" }} />)
        }
      />
    );
    return (
      <div className="App">
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute path="/home" component={HomePage} />
            <PrivateRoute path="/wishlist" component={WishList} />
            <PrivateRoute path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
