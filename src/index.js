import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AxiosFetchUserData from "./AxiosFetchUserData";

ReactDOM.render(
  <React.StrictMode>
    {/* To create multipage in react render the BrowserRouter object */}
    <BrowserRouter>
      <AxiosFetchUserData />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();