import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      This page is open sourced on git hub, hosted on netlify, and coded by emma
      h 🤩
    </footer>
  </React.StrictMode>
);

reportWebVitals();
