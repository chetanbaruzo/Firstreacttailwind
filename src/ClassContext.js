import React from "react";
import ReactDom from "react-dom";
import { createContext, Component } from "react";
 
export const ClassContext = createContext(); //exporting context object
 
export class ClassProvider extends Component {
  state = { message: "" };
  
  render() {
    return (
      <ClassContext.Provider
        value={{
          state: this.state,
          setMessage: (value) =>
            this.setState({
              message: value
            })
        }}
      >
        {this.props.children}
        {/* this indicates that all the child tags with ClassContext Provider as Parent can
        access the global store. */}
      </ClassContext.Provider>
    );
  }




}
