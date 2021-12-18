import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { InputGroup, Button, Input } from "reactstrap";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Auction() {
  const navigate = useNavigate();
  const onCellClicked = (params) => navigate("/playerpage");
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
      .then(function () {
      });
  };

  useEffect(() => {
    reCalc(0);
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Auction Draft</h2>
      <div>
        <InputGroup>
          <Button color="danger" onClick={() => reCalc(budget)}>Calculate</Button>
          <Input
            placeholder="total team budget"
            type="number"
            onChange={(event) => setBudget(event.target.value)}
          />
        </InputGroup>
      </div>
      <div className="ag-theme-alpine" style={{ height: 1000, width: 1000 }}>
        <AgGridReact
          rowData={data}
          onCellClicked={onCellClicked}
          defaultColDef={{ sortable: true, filter: true }}
          pagination={true}
          columnDefs={colDefs}
        ></AgGridReact>
      </div>
    </main>
  );
}
