import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auction from "./components/auction";
import Snake from "./components/snake";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auction" element={<Auction />} />
      <Route path="/snake" element={<Snake />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
