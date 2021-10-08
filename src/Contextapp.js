import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import './Contextapp.css'

class Contextapp extends Component{
    render(){
        return(
        <div className="mt-10 flex flex-col items-center transform scale-125">
            <UserInput /><UserOutput />
        </div>
        );
    }
}
export default Contextapp;