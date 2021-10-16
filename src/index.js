import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MultiPageBrowserRouter from "./MultiPageBrowserRouter";
import FetchUsersFromApi from "./FetchUsersFromApi";
import MultiPageFetchUserData from "./MultiPageFetchUserData";

ReactDOM.render(
  <React.StrictMode>
  {/* To create multipage in react render the BrowserRouter object */}
    <BrowserRouter>
      <MultiPageFetchUserData/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
