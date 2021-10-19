import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AxiosGetFetchApiRoute from "./AxiosGetFetchApiRoute";

class AxiosGetFetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  // Execute componentDidMount method after component render
  componentDidMount() {
    const apiUrl = "https://616a755d16e7120017fa0fac.mockapi.io/api/users";
    // Making a GET Request using axiom gives promise
    axios
      .get(apiUrl)
      .then((response) => {
        const usersData = response.data;
        this.setState({ users: usersData });
      })
      .catch((error) => {
        document.write("Error 404 (Not Found)");
      });
  }

  render() {
    const { users } = this.state;

    return (
      
        <div className="bg-green-400 ">
          <div className="flex flex-wrap">
            {users.map(
              (
                {
                  name,
                  avatar,
                  id,
                  email,
                  city,
                  job,
                  department,
                  country,
                  vehicle,
                  phone,
                },
                index
              ) => {
                return (
                  <div className="my-1 mx-1.5 text-left" key={index}>
                    <p className="p-5 rounded-xl">
                      <Link to={`/users/${id}`}>
                        <img
                          className="rounded-xl h-36 w-36"
                          src={avatar}
                          alt="Avatar"
                        />
                      </Link>
                    </p>
                    {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                    <Switch>
                      <Route path={`/users/${id}`} exact>
                        <AxiosGetFetchApiRoute
                          key={index}
                          id={id}
                          name={name}
                          email={email}
                          city={city}
                          job={job}
                          department={department}
                          country={country}
                          vehicle={vehicle}
                          phone={phone}
                        />
                      </Route>
                    </Switch>
                  </div>
                );
              }
            )}
          </div>
        </div>
      
    );
  }
}

export default AxiosGetFetchApi;
