import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Auction() {
  const navigate = useNavigate()
  const onCellClicked = (params) => navigate("/playerpage");

  const rowData = [
    {
      price: "$70",
      player: "Stephen Curry",
      points: 27.5,
      assists: 6.3,
      rebounds: 5.5,
      steals: 1.7,
      blocks: 0.4,
      threes: 5.5,
      fgPercentage: 439,
      ftPercentage: 0.934,
      turnovers: 3.2,
    },
    {
      price: "$72",
      player: "Nikola Jokic",
      points: 27.5,
      assists: 6.3,
      rebounds: 5.5,
      steals: 1.7,
      blocks: 0.4,
      threes: 5.5,
      fgPercentage: 439,
      ftPercentage: 0.934,
      turnovers: 3.2,
    },
    {
      price: "$56",
      player: "Jimmy Butler",
      points: 27.5,
      assists: 6.3,
      rebounds: 5.5,
      steals: 1.7,
      blocks: 0.4,
      threes: 5.5,
      fgPercentage: 439,
      ftPercentage: 0.934,
      turnovers: 3.2,
    },
  ];
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Auction</h2>
      <div className="ag-theme-alpine" style={{ height: 1000, width: 2400 }}>
        <AgGridReact rowData={rowData} onCellClicked={onCellClicked}>
          <AgGridColumn field="price"></AgGridColumn>
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
    </main>
  );
}
