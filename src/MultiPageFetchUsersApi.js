import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from "./About";

class MultiPageFetchUserApi extends Component {
  // FetchUsersFromApi is class component which fetching users data from below API
  constructor(props) {
    super(props);
    this.state = { loadingData: true, users: [] };
  }

  async MultifetchDataAsyncFunction() {
    // fetchDataAsyncFunction is fetching users data from this API
    const apiUrl = "https://api.github.com/users";
    const response = await fetch(apiUrl);
    const userData = await response.json();
    
    this.setState({ loadingData: false, users: userData });
  }
  componentDidMount() {
    this.MultifetchDataAsyncFunction();
  }
  render() {
    if (this.state.loadingData) {
      return <p>Loading...</p>;
    }
    const { users } = this.state;
    const apiUrl = "https://api.github.com/users";

    return (
        <Router>
      <div className="bg-green-400 ">
        <div className="flex flex-wrap ">
          {users.map(({ login, avatar_url }, index) => {
            return ( 
              <div className="my-1 mx-1.5 text-center" key={index}>
                <p className="p-5 rounded-xl">
                  {
                    <Link to={'/'}><img
                      className="rounded-xl h-28 w-28"
                      src={avatar_url}
                      alt="Avatar"
                    /></Link>
                  }
                </p>
                <p className="text-xl">{login}</p>
                
                <Switch>
                        
                <Route path='/users/:id' exact><About/></Route>
                        
                </Switch>
              </div>
            );
          })}
        </div>
      </div>
      </Router>
    );
  }
}

export default MultiPageFetchUserApi;
