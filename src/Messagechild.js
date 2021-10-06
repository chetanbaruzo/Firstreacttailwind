import React from "react";
import { Component } from "react";
import reactDom from "react-dom";

class Messagechild extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.myInput = React.createRef();
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        alert("Input is " + this.myInput);
      }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
        <input type="text" ref={this.myInput} />
        <input
          type="button"
          value="Alert the text input"
          onClick={this.handleClick}
        />
      </div>
      );
    }
  }

export default Messagechild;