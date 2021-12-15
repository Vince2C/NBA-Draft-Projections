import React from "react";
import Button from "react-bootstrap/Button";
import image from "./dametime.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Mainpage() {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("../api");
  //     setData(result.data);
  //   })();
  // }, []);

  return (
    <div>
      <h1>NBA Draft Projections 2022</h1>
      <h2>Show your friends who's boss</h2>
      <div className="mb-2">
        <Button onClick={ () => {navigate("/snake")}} variant="primary" size="lg">
          Snake Draft
        </Button>{" "}
        <Button onClick={ () => {navigate("/auction")}} variant="secondary" size="lg">
          Auction Draft
        </Button>
      </div>
      <img src={image} alt="dametime" />
    </div>
  );
}
