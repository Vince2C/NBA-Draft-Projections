import React from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



export default function Snake() {
  const navigate = useNavigate()
  const onCellClicked = (params) => navigate("/playerpage");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get("localhost:3000/api");
  //     setData(result.data);
  //   })();
  // }, []);

  useEffect(() => {
    fetch('/api/')
    .then(res => res.json())
    .then(console.log("this is data", data))
    .then(data => setData(data))
  }, [])
  
  

//   useEffect(() => {
//     const url = "localhost:3000/api";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
// }, []);


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
    <div style={{ padding: "1rem 0" }} style={{ height: '100%', width: '100%' }}>
      <h2>Snake</h2>
      <div className="ag-theme-alpine" style={{ height: 1000, width: 2400 }}>
        <AgGridReact rowData={rowData} onCellClicked={onCellClicked}>
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
          <AgGridColumn field="turnovers"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}