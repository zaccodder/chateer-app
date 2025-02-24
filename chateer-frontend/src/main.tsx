import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Fix: Use "react-dom/client" for createRoot
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
