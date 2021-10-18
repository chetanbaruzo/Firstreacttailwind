import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AxiosFetchUserApi from "./AxiosFetchUserApi";

class AxiosFetchUserData extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
          <h1 className="text-xl">
            <Link to={"/"}>Home</Link>
            <span> | </span>
            <Link to={"/users"}>Axios Multi Page Fetch User Data</Link>
          </h1>
          <hr />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact></Route>
            <Route path="/users">
              <AxiosFetchUserApi />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AxiosFetchUserData;