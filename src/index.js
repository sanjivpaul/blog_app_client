import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CSS/style.css";
import { BrowserRouter } from "react-router-dom";
// import { ContextProvider } from "./context/Context";
import { store, persistor } from "./Redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        {/* <ContextProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </ContextProvider> */}
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
