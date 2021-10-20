import React, { Component } from "react";

class AxiosGetFetchApiRoute extends Component {
  
  render() {
    console.log(this.props.id);
    return (
      <div>
        <div className="ml-6">
        <h1>Users Data</h1>
        
          <div className="bg-yellow-300 w-max px-3 rounded-md">{`Id: ${this.props.id}`}</div>
          <br />
          <div className="bg-gray-300 w-max px-3 rounded-md">{`Name: ${this.props.name}`}</div>
        </div>
      </div>
    );
  }
}

export default AxiosGetFetchApiRoute;