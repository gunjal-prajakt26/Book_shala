import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider, DataContext } from "./Context/DataContext";
import { AuthProvider, AuthContext } from "./Context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom"

// Call make Server
makeServer();

export {DataContext, AuthContext}

ReactDOM.render(
  <React.StrictMode>
  <Router>
   <DataProvider>
  <AuthProvider>
    <App />
    </AuthProvider>
    </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
