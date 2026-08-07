import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NavProvider } from "./context/NavContext.jsx";
import { ImgScrollProvider } from "./context/ImgContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavProvider>
      <ImgScrollProvider>
        <App />
        </ImgScrollProvider>
    </NavProvider>
  </StrictMode>,
);
