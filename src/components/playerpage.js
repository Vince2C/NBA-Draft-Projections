import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Playerpage() {
  const navigate = useNavigate();

  const rowData = [
    {
      year: "2021",
      player: "Nikola Jokic",
      points: 26.4,
      assists: 8.3,
      rebounds: 10.8,
      steals: 1.3,
      blocks: 0.7,
      threes: 1.3,
      fgPercentage: 566,
      ftPercentage: 0.868,
      turnovers: 3.1,
    },
    {
      year: "2020",
      player: "Nikola Jokic",
      points: 19.9,
      assists: 7.0,
      rebounds: 9.7,
      steals: 1.2,
      blocks: 0.6,
      threes: 1.1,
      fgPercentage: 528,
      ftPercentage: 0.817,
      turnovers: 3.1,
    },
    {
      year: "2019",
      player: "Nikola Jokic",
      points: 20.1,
      assists: 7.3,
      rebounds: 10.8,
      steals: 1.4,
      blocks: 0.7,
      threes: 1.0,
      fgPercentage: 511,
      ftPercentage: 0.821,
      turnovers: 3.1,
    },
  ];
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Player Page</h2>
      <div className="ag-theme-alpine" style={{ height: 1000, width: 2400 }}>
        <AgGridReact rowData={rowData} >
          <AgGridColumn field="year"></AgGridColumn>
          <AgGridColumn field="player"></AgGridColumn>
          <AgGridColumn field="points"></AgGridColumn>
          <AgGridColumn field="assists"></AgGridColumn>
          <AgGridColumn field="rebounds"></AgGridColumn>
          <AgGridColumn field="steals"></AgGridColumn>
          <AgGridColumn field="blocks"></AgGridColumn>
          <AgGridColumn field="threes"></AgGridColumn>
          <AgGridColumn field="fgPercentage"></AgGridColumn>
          <AgGridColumn field="ftPercentage"></AgGridColumn>
          <AgGridColumn field="turnovers"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}