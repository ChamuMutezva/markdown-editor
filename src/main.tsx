import React from "react";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { ContentProvider } from "./context/ContentContext";
import { ToggleMenuProvider } from "./context/ToggleMenuContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastContainer position="top-center" limit={1} />
      <ContentProvider>
        <ToggleMenuProvider>
          <App />
        </ToggleMenuProvider>
      </ContentProvider>
    </ThemeProvider>
  </React.StrictMode>
);
