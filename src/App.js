import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Books from "./components/Books";
import Search from "./components/Search";

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Books} />
            <Route path="/search" component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
