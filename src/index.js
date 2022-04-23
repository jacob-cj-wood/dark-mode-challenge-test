import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import { App } from "./routes/index";

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
);
