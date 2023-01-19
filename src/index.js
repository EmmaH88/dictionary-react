import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer className="m-3">
      This page is open sourced on{" "}
      <a
        href="https://github.com/EmmaH88/dictionary-react"
        rel="noreferrer"
        target="_blank"
      >
        GitHub,
      </a>{" "}
      hosted on{" "}
      <a
        href="https://my-dictionary-react.netlify.app"
        rel="noreferrer"
        target="_blank"
      >
        Netlify,
      </a>{" "}
      and coded by Emma H 🤩
    </footer>
  </React.StrictMode>
);

reportWebVitals();
