import React, { Component } from "react";
import {users} from './AxiosGetFetchApi'
class AxiosGetFetchApiRoute extends Component {
  
  render() {
    
    return (
      <div>
        <div className="ml-6">
          <div className="bg-yellow-300 w-max px-3 rounded-md">{`Id: ${this.props.id}`}</div>
          <br />
          <div className="bg-gray-300 w-max px-3 rounded-md">{`Name: ${this.props.name}`}</div>
          <br />
          <div className="bg-yellow-300 w-max px-3 rounded-md">{`Email: ${this.props.email}`}</div>
          <br />
          <div className="bg-gray-300 w-max px-3 rounded-md">{`Job Title: ${this.props.job}`}</div>
          <br />
          <div className="bg-yellow-300 w-max px-3 rounded-md">{`Department: ${this.props.department}`}</div>
          <br />
          <div className="bg-gray-300 w-max px-3 rounded-md">{`Vehicle: ${this.props.vehicle}`}</div>
          <br />
          <div className="bg-yellow-300 w-max px-3 rounded-md">{`Phone Number: ${this.props.phone}`}</div>
          <br />
          <div className="bg-gray-300 w-max px-3 rounded-md">{`City: ${this.props.city}`}</div>
          <br />
          <div className="bg-yellow-300 w-max px-3 rounded-md">{`Country: ${this.props.country}`}</div>
        </div>
      </div>
    );
  }
}

export default AxiosGetFetchApiRoute;