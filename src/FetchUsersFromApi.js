import React from "react";
import { Component } from "react";

class FetchUsersFromApi extends Component {
  // FetchUsersFromApi is class component which fetching users data from below API
  constructor(props) {
    super(props);
    this.state = { loadingData: true, users: [] };
  }

  async fetchDataAsyncFunction() {
    // fetchDataAsyncFunction is fetching users data from this API
    const apiUrl = "https://api.github.com/users";
    const response = await fetch(apiUrl);
    const userData = await response.json();
    console.log(userData);
    this.setState({ loadingData: false, users: userData });
  }
  componentDidMount() {
    this.fetchDataAsyncFunction();
  }
  render() {
    if (this.state.loadingData) {
      return <p>Loading...</p>;
    }
    const { users } = this.state;
    console.log({users});

    return (
      
      <div className="bg-green-400 ">
        <div className="flex flex-wrap ">
          {users.map(({ login, avatar_url }, index) => {
            return ( 
              <div className="my-1 mx-1.5 text-center" key={index}>
                <p className="p-5 rounded-xl">
                  {
                    <img
                      className="rounded-xl h-28 w-28"
                      src={avatar_url}
                      alt="Avatar"
                    />
                  }
                </p>
                <p className="text-xl">{login}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FetchUsersFromApi;
