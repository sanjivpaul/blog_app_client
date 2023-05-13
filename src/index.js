import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CSS/style.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
