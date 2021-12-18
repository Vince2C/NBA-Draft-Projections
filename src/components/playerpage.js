import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

export default function Playerpage() {
  const navigate = useNavigate();

  const rowData = [
    {
      year: "2021",
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
    {
      year: "2018",
      points: 18.5,
      assists: 5.5,
      rebounds: 9.7,
      steals: 1.0,
      blocks: 1.2,
      threes: 0.8,
      fgPercentage: 514,
      ftPercentage: 0.801,
      turnovers: 3.4,
    },
    {
      year: "2017",
      points: 16.7,
      assists: 5.4,
      rebounds: 9.8,
      steals: 1.3,
      blocks: 1.1,
      threes: 1.3,
      fgPercentage: 497,
      ftPercentage: 0.829,
      turnovers: 2.3,
    },
    {
      year: "2016",
      points: 10.0,
      assists: 2.3,
      rebounds: 7.0,
      steals: 1,
      blocks: 0.6,
      threes: 0.4,
      fgPercentage: 512,
      ftPercentage: 0.811,
      turnovers: 1.3,
    },
  ];

  const chartData = [
    {
      year: "2021",
      assists: 8.3,
      rebounds: 10.8,
      steals: 1.3,
      blocks: 0.7,
      threes: 1.3,
      fgPercentage: .566,
      ftPercentage: 0.868,
      turnovers: 3.1,
    },
    {
      year: "2020",
      assists: 7.0,
      rebounds: 9.7,
      steals: 1.2,
      blocks: 0.6,
      threes: 1.1,
      fgPercentage: .528,
      ftPercentage: 0.817,
      turnovers: 3.1,
    },
    {
      year: "2019",
      assists: 7.3,
      rebounds: 10.8,
      steals: 1.4,
      blocks: 0.7,
      threes: 1.0,
      fgPercentage: .511,
      ftPercentage: 0.821,
      turnovers: 3.1,
    },
    {
      year: "2018",
      assists: 5.5,
      rebounds: 9.7,
      steals: 1.0,
      blocks: 1.2,
      threes: 0.8,
      fgPercentage: .514,
      ftPercentage: 0.801,
      turnovers: 3.4,
    },
    {
      year: "2017",
      assists: 5.4,
      rebounds: 9.8,
      steals: 1.3,
      blocks: 1.1,
      threes: 1.3,
      fgPercentage: .497,
      ftPercentage: 0.829,
      turnovers: 2.3,
    },
    {
      year: "2016",
      assists: 2.3,
      rebounds: 7.0,
      steals: 1,
      blocks: 0.6,
      threes: 0.4,
      fgPercentage: .512,
      ftPercentage: 0.811,
      turnovers: 1.3,
    },
  ];

  const [graph, setGraph] = useState(
    {
      options: {
        data: chartData,
        title: { text: "Nikola Jokic" },
        subtitle: { text: "player stats" },
        padding: {
          top: 40,
          right: 40,
          bottom: 40,
          left: 40,
        },
        series: [
          {
            type: "column",
            xKey: "year",
            yKeys: ["assists", "rebounds", "steals", "blocks", "threes", "fgPercentage", "ftPercentage", "turnovers"],
          },
        ],
        legend: { spacing: 40 },
      },
    },
  );

  return (
    <div>
      <h2>Player Details - Nikola Jokic</h2>
      <div
        className="ag-theme-balham-dark"
        style={{ height: "400px", width: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          chartData={chartData}
          onGridReady={(params) => {
            // Following line to make the currently visible columns fit the screen
            params.api.sizeColumnsToFit();
            // Following line dymanic set height to row on content
            params.api.resetRowHeights();
          }}
        >
          <AgGridColumn field="year"></AgGridColumn>
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
        <AgChartsReact options={graph.options} />
      </div>
    </div>
  );
}
