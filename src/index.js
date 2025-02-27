import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";


const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
