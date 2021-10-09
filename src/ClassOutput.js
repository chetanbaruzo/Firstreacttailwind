import React from "react";
import { Component } from "react";

import { ClassContext } from "./ClassContext";

class ClassOutput extends Component {
  render() {
    return (
      <div>
        <ClassContext.Consumer>
          {(context) => (
            <h2 className="ClassContextoutputtext">
              <strong>Output</strong>: {context.state.message}
            </h2>
          )}
        </ClassContext.Consumer>
      </div>
    );
  }
}
export default ClassOutput;
