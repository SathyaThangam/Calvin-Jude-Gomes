import React, { Component } from "react";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Utils/Navbar";
import Footer from "./Components/Utils/Footer";
import Home from "./Components/Homepage/Homepage";
import Api from "./Components/Apipage/Apigenerator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/api" component={Api} />
          </Switch>
          <Footer />
        </Router>

      </div>
    );
  }
}

export default App;
