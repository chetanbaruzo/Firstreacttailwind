import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AxiosFetchUserApi from "./AxiosFetchUserApi";
import AxiosGetFetchApi from "./AxiosGetFetchApi";
import AxiosGetFetchApiRoute from "./AxiosGetFetchApiRoute";

class AxiosFetchUserData extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
          <h1 className="text-xl">
            <Link to={"/"}>Home</Link>
            <span> | </span>
            <Link to={"/users"}>Axios Multi Page Fetch Users Data</Link>
          </h1>
          <hr />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              Home page
            </Route>
            <Route path="/users" exact>
              <AxiosGetFetchApi />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AxiosFetchUserData;
