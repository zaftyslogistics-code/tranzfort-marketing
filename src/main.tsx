import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

// Add deployment timestamp for verification
const deploymentTimestamp = new Date().toISOString();
console.log("Deployment timestamp:", deploymentTimestamp);

// Add meta tag with build time for verification
const metaTag = document.createElement("meta");
metaTag.name = "build-time";
metaTag.content = deploymentTimestamp;
document.head.appendChild(metaTag);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
