import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";

import AxiosGetFetchApiRoute from "./AxiosGetFetchApiRoute";
import AxiosFetchUserApi from "./AxiosFetchUserApi";
import AxiosGetFetchApi from "./AxiosGetFetchApi";
import axios from "axios";

export default function NestedRouting() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/user">
            <AxiosGetFetchApi />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  let history = useHistory();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  function sayHello(id) {
    console.log(id);
    <AxiosGetFetchApiRoute id={id}></AxiosGetFetchApiRoute>;
  }
  return (
    <div>
      <h2>Topics</h2>
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        <img
          className="rounded-xl h-36 w-36"
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png"
          alt="Avatar"
        />
      </button>
      <ul>
        <li>
          <Link to={`${match.url}/components`} target="_blank">
            <img
              className="rounded-xl h-36 w-36"
              src="https://store-images.s-microsoft.com/image/apps.13155.7f01bca7-2380-4ec7-b6a8-cf488afa7800.4730a05c-e397-4c82-9935-9d53da020526.5ca39173-dd05-471e-a3cb-766172a62730"
              alt="Avatar"
            />
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {users.map((element, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                history.push("/about");
                sayHello({ index });
              }}
            >
              <img src={element.avatar_url} alt="avatar" />
            </button>
          </div>
        );
      })}

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function Login() {
  let history = useHistory();
  return (
    <button
      onClick={() => {
        history.push("/about");
      }}
    >
      Click
    </button>
  );
}

export const User = () => {
  const { id } = useParams();

  const [userData, setuserData] = useState(null);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get(`https://616a755d16e7120017fa0fac.mockapi.io/api/users/${id}`)
      .then((response) => {
        setuserData(response.data.name);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div>
      <div className="bg-yellow-300 w-max px-3 rounded-md">User ID: {id} </div>
      <br />
      <div className="bg-gray-300 w-max px-3 rounded-md">
        User Name: {userData}
      </div>
    </div>
  );
};
