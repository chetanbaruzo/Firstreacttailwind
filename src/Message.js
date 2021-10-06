import React from "react";
import { Component } from "react";
import ReactDom from "react-dom";
import Messagechild from "./Messagechild";

class Message extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
    }
  
    componentDidMount() {
      console.log(this.textInput.current.value);
    }
  
    render() {
      return (
        <Messagechild ref={this.textInput} />
      );
    }
  }

export default Message;