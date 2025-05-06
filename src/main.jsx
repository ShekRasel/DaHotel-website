import { createRoot } from "react-dom/client";
import "./index.css";
import CompoentContext from "./context/CompoentContext.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CompoentContext>
      <App />
    </CompoentContext>
  </BrowserRouter>
);
