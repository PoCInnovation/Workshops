import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import WagmiWrapper from "./WagmiWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiWrapper>
      <App />
    </WagmiWrapper>
  </React.StrictMode>
);
