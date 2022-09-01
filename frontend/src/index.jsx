import React from "react";
import ReactDOM from "react-dom/client";
import MyContextProvider from "./MyContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MyContextProvider>
  </React.StrictMode>
);
