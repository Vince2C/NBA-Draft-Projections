import React from "react";
import Button from "react-bootstrap/Button";
import image from "./dametime.png";
import { useNavigate } from "react-router-dom";

export default function Mainpage() {
  const navigate = useNavigate();

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
