import React from "react";
import { Component } from "react";
import reactDom from "react-dom";
import "./Message.css";

class Messagechild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit = () => {
    // paas the Data from Child to Parent use callback function
    // Pass the callback function from the parent as a prop to the child component.
    this.props.parentCallback(this.state.username);
  };

  render() {
    return (
      <div className="flex mt-20 mb-auto mx-1.5 justify-center">
        <input
          className="messageinputtext"
          type="text"
          onChange={this.updateInput}
          placeholder="Write anything"
        ></input>
        {/* onChange is event Handler, when typed in, passes its current value to the updateInput function. */}
        <button
          className="messagebutton"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        {/* onClick is event Handler, when click the button, it triggr the handleSubmit function. */}
      </div>
    );
  }
}

export default Messagechild;
