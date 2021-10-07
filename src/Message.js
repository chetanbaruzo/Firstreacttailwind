import React from "react";
import { Component } from "react";
import ReactDom from "react-dom";
import Messagechild from "./Messagechild";
import "./Message.css";

class Message extends React.Component {
  state = { message: "" };
  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };

  render() {
    return (
      <div>
        {/* Create a callback function in the parent component. 
          This callback function will get the data from the child component.
          Pass the callback function in the parent as a prop to the child component.
          The child component calls the parent callback function using props.
          */}
        <Messagechild parentCallback={this.callbackFunction} />
        <p className="outputtext">Output will be here: {this.state.message} </p>
      </div>
    );
  }
}

export default Message;
