import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      limit={3}
      theme="dark"
    />
    <App />
  </Router>
);
