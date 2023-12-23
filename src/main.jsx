import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DataProviderFunc } from "./context.jsx";
import bg from "./images/bg.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <DataProviderFunc>
        <App />
      </DataProviderFunc>
    </BrowserRouter>
  </>
);
