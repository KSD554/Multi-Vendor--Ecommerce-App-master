import React from "react";
import ReactDOM from "react-dom/client"; // Import de createRoot
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root")); // Utilisation de createRoot

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
