import React, { Component } from "react";
import axios from "axios";

class AxiosGetFetchApiRoute extends Component {

  

  render() {
    const { id } = this.props.match;
    
    console.log(id);
    return (
      <div>
        <div className="ml-6">
        <h1>Users Data</h1>
        
          <div className="bg-yellow-300 w-max px-3 rounded-md"></div>
          <br />
          <div className="bg-gray-300 w-max px-3 rounded-md"></div>
        </div>
      </div>
    );
  }
}

export default AxiosGetFetchApiRoute;