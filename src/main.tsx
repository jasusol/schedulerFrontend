import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import Navbar from "./navbar";
import AppRouter from "./router";
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      {/* <App /> */}
      <div>
      <AppRouter></AppRouter>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
