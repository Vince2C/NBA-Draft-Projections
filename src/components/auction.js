import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Auction() {
  const navigate = useNavigate();
  const onCellClicked = (params) => navigate("/playerpage");
  const [data, setData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "Rank" },
    { field: "Value"},
    { field: "Name" },
    { field: "Team"},
    { field: "Pos"},
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

  // useEffect(() => {
  //   fetch("/api/")
  //     .then((res) => {
  //       console.log(res.json().body);
  //       return res.json().body;
  //     })
  //     .then(console.log("this is data!!!!", data))
  //     .then((data) => setData(data));
  // }, []);

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

  // const rowData = [
  //   {
  //     price: "$70",
  //     player: "Stephen Curry",
  //     points: 27.5,
  //     assists: 6.3,
  //     rebounds: 5.5,
  //     steals: 1.7,
  //     blocks: 0.4,
  //     threes: 5.5,
  //     fgPercentage: 439,
  //     ftPercentage: 0.934,
  //     turnovers: 3.2,
  //   },
  //   {
  //     price: "$72",
  //     player: "Nikola Jokic",
  //     points: 27.5,
  //     assists: 6.3,
  //     rebounds: 5.5,
  //     steals: 1.7,
  //     blocks: 0.4,
  //     threes: 5.5,
  //     fgPercentage: 439,
  //     ftPercentage: 0.934,
  //     turnovers: 3.2,
  //   },
  //   {
  //     price: "$56",
  //     player: "Jimmy Butler",
  //     points: 27.5,
  //     assists: 6.3,
  //     rebounds: 5.5,
  //     steals: 1.7,
  //     blocks: 0.4,
  //     threes: 5.5,
  //     fgPercentage: 439,
  //     ftPercentage: 0.934,
  //     turnovers: 3.2,
  //   },
  // ];
  console.log("----");
  console.log("this is data", colDefs);
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Auction</h2>
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
