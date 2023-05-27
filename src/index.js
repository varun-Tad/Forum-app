import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { HomeProvider } from "./Context/HomeContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <HomeProvider>
      <App />
    </HomeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
