import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Css
import "./index.css";

// Components Used
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
