import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//Browser Router is basiclly a context Provider
import { BrowserRouter as Router } from "react-router-dom";
import "./server.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
