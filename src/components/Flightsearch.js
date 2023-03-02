import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCaretDownFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Showhotel from "./Showhotel";
import ShowFlight from "./ShowFlight";
const Flightsearch = () => {
  const location = useLocation();
  console.log("Id: ", location.state.id);
  const [Allflight, setAllFlight] = useState([]);
  useEffect(() => {
    async function fetchFlight() {
      const Response = await fetch(
        "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
      );
      const FlightList = await Response.json();
      setAllFlight(FlightList);
      console.log("Flight are ", Allflight);
    }
    fetchFlight();
  }, []);
  return (
    <div>
      <Container>
        <div>
          <InputGroup>
            <div className="d-flex flex-column justify-content-around w-100">
              <div>
                Trip Type:
                <select>
                  <option value="oneway">Oneway</option>
                  <option value="roundtrip">Round Trip</option>
                </select>
              </div>
              <div className="d-flex flex-xs-column justify-content-around">
                <div className="d-flex flex-column m-2 w-25">
                  FROM
                  <Form.Control placeholder="Delhi" aria-label="City" />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  FTO
                  <Form.Control placeholder="Mumbai" aria-label="City" />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  DEPARTURE
                  <Form.Control
                    type="date"
                    placeholder="MM/DD/YYYY"
                    aria-label="Check-in Date"
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  RETURN
                  <Form.Control
                    type="date"
                    placeholder="MM/DD/YYYY"
                    aria-label="Check-out Date"
                  />
                </div>
              </div>
            </div>
          </InputGroup>
        </div>
        <div className="d-flex flex-row justify-content-between p-3">
          <hr className="d-flex justify-content-start w-50" />
          <Button
            className="d-flex justify-content-center w-50 align-items-center"
            variant="outline-secondary"
            id="button-addon1"
          >
            Search
            <BsCaretDownFill />
          </Button>
          <hr className="d-flex justify-content-between w-50" />
        </div>
      </Container>
      <h2 className="m-4">Available Tickets</h2>
      {Allflight.map((ticket, i) => (
        <ShowFlight flightDetail={ticket} key={i} />
      ))}
    </div>
  );
};

export default Flightsearch;
