import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import ClassInput from "./ClassInput";
import ClassOutput from "./ClassOutput";
import './ClassContextApp.css';
 
class ClassContextApp extends Component {
  render() {
    return (
      <div className="mt-10 flex flex-col items-center">
        <ClassInput />
        <ClassOutput />
      </div>
    );
  }
}
export default ClassContextApp;