import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Auction() {
  const rowData = [
    {
      rank: "1",
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
      rank: "2",
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
      rank: "3",
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
      <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
        <AgGridReact rowData={rowData} >
          <AgGridColumn field="rank"></AgGridColumn>
          <AgGridColumn field="player"></AgGridColumn>
          <AgGridColumn field="points"></AgGridColumn>
          <AgGridColumn field="assists"></AgGridColumn>
          <AgGridColumn field="rebounds"></AgGridColumn>
          <AgGridColumn field="steals"></AgGridColumn>
          <AgGridColumn field="blocks"></AgGridColumn>
          <AgGridColumn field="threes"></AgGridColumn>
          <AgGridColumn field="fgPercentage"></AgGridColumn>
          <AgGridColumn field="ftPercentage"></AgGridColumn>
          <AgGridColumn field="turnover"></AgGridColumn>
        </AgGridReact>
      </div>
    </main>
  );
}
