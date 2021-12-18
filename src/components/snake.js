import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Snake() {
  const navigate = useNavigate();
  const onCellClicked = (params) => navigate("/playerpage");
  const [data, setData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "Rank", resizable: true },
    { field: "Value", resizable: true },
    { field: "Name", resizable: true },
    { field: "Team", resizable: true },
    { field: "Pos", resizable: true },
    { field: "Points", resizable: true },
    { field: "Assists", resizable: true },
    { field: "Rebounds", resizable: true },
    { field: "Steals", resizable: true },
    { field: "Blocks", resizable: true },
    { field: "Threes", resizable: true },
    { field: "fgPercentage", resizable: true },
    { field: "ftPercentage", resizable: true },
    { field: "Turnovers", resizable: true },
  ]);

  useEffect(() => {
    axios
      .get("/api/")
      .then(function (response) {
        // handle success
        console.log("below is the response");
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed (this function is used to cleanup anything you want regardless if it is success or fail)
      });
  }, []);

  

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Snake Draft</h2>
      <div className="ag-theme-alpine" style={{ height: 1000, width: '100%' }}>
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
