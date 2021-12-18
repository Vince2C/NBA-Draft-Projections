import React from "react";
import Button from "react-bootstrap/Button";
import image from "../../public/dametime.png";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./mainpage.css";

export default function Mainpage() {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("../api");
  //     setData(result.data);
  //   })();
  // }, []);

  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
            <h1>NBA Draft Calculator</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Show your friends who's boss</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mb-2">
              <button
                className="btn btn-outline-light"
                onClick={() => {
                  navigate("/snake");
                }}
                // variant="primary"
                size="lg"
              >
                Snake Draft
              </button>{" "}
              <button
                className="btn btn-outline-light"
                onClick={() => {
                  navigate("/auction");
                }}
                size="lg"
              >
                Auction Draft
              </button>
            </div>
          </Col>
        </Row>
        <Row className="main-container">
          <Col className="class-col">
            <img src={image} alt="dametime" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
