import React from "react";
import ReactDOM from "react-dom/client"; // Utilisation de createRoot
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

// Initialisation de React avec createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Appel à reportWebVitals pour des métriques de performance
reportWebVitals();
