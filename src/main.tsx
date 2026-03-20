import React from "react";
import ReactDOM from "react-dom/client";
import RikuKallio from "./RikuKallio";
import { ThemeProvider } from "./theme/ThemeProvider";
// styles
import "./assets/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RikuKallio />
    </ThemeProvider>
  </React.StrictMode>,
);
