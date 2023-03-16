import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCaretDownFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import ShowFlight from "./ShowFlight";
import { toast } from "react-hot-toast";
const Flightsearch = () => {
  const location = useLocation();
  console.log("Id: ", location.state.id);
  const [Allflight, setAllFlight] = useState([]);
  const [Filteredflight, setFilteredflight] = useState(null);
  const [TripType, setTripType] = useState("Oneway");
  const [FromCity, setFromCity] = useState("");
  const [ToCity, setToCity] = useState("");
  const [DepartureDate, setDepartureDate] = useState("");
  const [ReturnDate, setReturnDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchFilterFlight() {
    setIsLoading(true);
    const Response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights?from=${FromCity}&to=${ToCity}&departure.departureDate=${DepartureDate}&return.returnDate=${ReturnDate}`
    );
    const FilteredFlightList = await Response.json();
    setIsLoading(false);
    setFilteredflight(FilteredFlightList);
  }
  async function fetchFlight() {
    setIsLoading(true);
    const Response = await fetch(
      "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
    );
    const FlightList = await Response.json();
    setIsLoading(false);
    setAllFlight(FlightList);
  }

  useEffect(() => {
    fetchFlight();
  }, []);
  function filterFlight() {
    if (!FromCity || !ToCity || !DepartureDate || !ReturnDate)
      toast.error("All Fields are required");
    else fetchFilterFlight();
  }
  return (
    <div>
      <Container>
        <div>
          <InputGroup>
            <div className="d-flex flex-column justify-content-around w-100">
              <div>
                Trip Type:
                <select
                  onChange={(e) => {
                    setTripType(e.target.value);
                  }}
                >
                  <option value="oneway">Oneway</option>
                  <option value="roundtrip">Round Trip</option>
                </select>
              </div>
              <div className="d-flex flex-xs-column justify-content-around">
                <div className="d-flex flex-column m-2 w-25">
                  FROM
                  <Form.Control
                    value={FromCity}
                    placeholder="Delhi"
                    onChange={(e) => {
                      let fromCity = e.target.value;
                      fromCity =
                        fromCity.charAt(0).toUpperCase() +
                        fromCity.slice(1).toLowerCase();
                      setFromCity(fromCity);
                    }}
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  TO
                  <Form.Control
                    value={ToCity}
                    placeholder="Mumbai"
                    onChange={(e) => {
                      let toCity = e.target.value;
                      toCity =
                        toCity.charAt(0).toUpperCase() +
                        toCity.slice(1).toLowerCase();
                      setToCity(toCity);
                    }}
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  DEPARTURE
                  <Form.Control
                    type="date"
                    placeholder="MM/DD/YYYY"
                    value={DepartureDate}
                    onChange={(e) => {
                      setDepartureDate(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  RETURN
                  <Form.Control
                    type="date"
                    placeholder="MM/DD/YYYY"
                    value={ReturnDate}
                    onChange={(e) => {
                      setReturnDate(e.target.value);
                    }}
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
            id="searchFlight"
            onClick={filterFlight}
          >
            Search
            <BsCaretDownFill />
          </Button>
          <hr className="d-flex justify-content-between w-50" />
        </div>
      </Container>
      <h2 className="m-4">Available Tickets</h2>

      {isLoading ? (
        <Container>
          <Spinner animation="border" variant="danger" />
        </Container>
      ) : Filteredflight ? (
        Filteredflight.map((ticket, i) => (
          <ShowFlight flightDetail={ticket} key={i} />
        ))
      ) : (
        Allflight.map((ticket, i) => (
          <ShowFlight flightDetail={ticket} key={i} />
        ))
      )}
    </div>
  );
};

export default Flightsearch;
