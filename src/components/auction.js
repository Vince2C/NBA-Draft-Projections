import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { InputGroup, Button, Input, Container, Row, Col } from "reactstrap";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import "./auction.css";
export default function Auction() {
  const navigate = useNavigate();
  const onCellClicked = (params) => {
    console.log(params.data);
    navigate("/playerpage/");
  };
  const [data, setData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "totalBid", headerName: "Total Bid" },
    { field: "Value" },
    { field: "Name" },
    { field: "Team" },
    { field: "Pos" },
    { field: "Points" },
    { field: "Assists" },
    { field: "Rebounds" },
    { field: "Steals" },
    { field: "Blocks" },
    { field: "Threes" },
    { field: "fgPercentage" },
    { field: "ftPercentage" },
    { field: "Turnovers" },
  ]);
  const [budget, setBudget] = useState([]);

  const reCalc = (num) => {
    axios
      .get("/api/auction/" + num.toString())
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  useEffect(() => {
    reCalc(0);
  }, []);

  return (
    <div className="auction_main">
      <h2>Auction Draft</h2>
      <InputGroup>
        <Button
          className="btn btn-outline-light"
          onClick={() => reCalc(budget)}
        >
          Calculate
        </Button>
        <Input
          placeholder="enter team budget"
          type="number"
          onChange={(event) => setBudget(event.target.value)}
        />
      </InputGroup>

      <div
        className="ag-theme-balham-dark"
        style={{ height: "900px", width: "100%" }}
      >
        <AgGridReact
          rowData={data}
          onCellClicked={onCellClicked}
          defaultColDef={{ sortable: true, filter: true }}
          pagination={true}
          columnDefs={colDefs}
          onGridReady={(params) => {
            // Following line to make the currently visible columns fit the screen
            params.api.sizeColumnsToFit();
            // Following line dymanic set height to row on content
            params.api.resetRowHeights();
          }}
        ></AgGridReact>
      </div>
    </div>
  );
}
