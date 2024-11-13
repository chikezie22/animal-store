import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AnimalProvider } from "./context/AnimalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimalProvider>
      <App />
    </AnimalProvider>
  </StrictMode>
);
