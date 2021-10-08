import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Chat from "./Chat";
import Message from "./Message";
import Messagechild from "./Messagechild";
import { UserProvider } from "./UserContext";
import Contextapp from "./Contextapp";

ReactDOM.render(
  <React.StrictMode>
    {/* All context data is currently provided to the root element and can be subscribed to by its children, using UserProvider */}
    <UserProvider>
      <Contextapp />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
