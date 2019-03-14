import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App name="JSX" />,
    document.body.appendChild(document.createElement("div"))
  );
});
