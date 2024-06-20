import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import flexible from "./utils/flexible.ts";
import reportWebVitals from "./utils/reportWebVitals.ts";

flexible();
reportWebVitals();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
