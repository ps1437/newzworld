import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routers from "./router";

import "./App.css";
import "./loader.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Routers />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
