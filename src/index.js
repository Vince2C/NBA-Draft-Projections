import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auction from "./components/auction";
import Snake from "./components/snake";
import Playerpage from "./components/playerpage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auction" element={<Auction />} />
      <Route path="/snake" element={<Snake />} />
      <Route path="/playerpage" element={<Playerpage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
