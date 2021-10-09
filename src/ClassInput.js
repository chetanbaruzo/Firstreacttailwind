import React from "react";
import { Component } from "react";

import { ClassContext } from "./ClassContext";

class ClassInput extends Component {
  render() {
    return (
      <div>
        <ClassContext.Consumer>
          {(context) => (
            <input
              className="ClassContextinputtext"
              onChange={(e) => context.setMessage(e.target.value)}
              placeholder="write anything..."
            />
          )}
        </ClassContext.Consumer>
      </div>
    );
  }
}

export default ClassInput;
