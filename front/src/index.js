import React from "react";
import ReactDOM from "react-dom";
import "./style/main.css";
import App from "./App";
import HomeRouter from "./pages/HomeRouter";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterPages /> */}
    <HomeRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
