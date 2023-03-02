import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCaretDownFill } from "react-icons/bs";
import Showhotel from "./Showhotel";

const Hotelsearch = () => {
  const [Allhotels, setAllHotel] = useState([]);
  useEffect(() => {
    async function fetchHotel() {
      const Response = await fetch(
        "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
      );
      const HotelList = await Response.json();
      setAllHotel(HotelList);
      console.log("Hotels are ", HotelList);
    }
    fetchHotel();
  }, []);
  return (
    <div>
      <Container>
        <div>
          <InputGroup>
            <div className="d-flex flex-column justify-content-around w-100">
              <div>
                Room Type:
                <select>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                </select>
              </div>
              <div className="d-flex flex-xs-column justify-content-around">
                <div className="d-flex flex-column m-2 w-25">
                  CITY, OR LOCATION
                  <Form.Control placeholder="City Name" aria-label="City" />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  CHECK IN
                  <Form.Control
                    type="date"
                    placeholder="MM/DD/YYYY"
                    aria-label="Check-in Date"
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  CHECK OUT
                  <Form.Control
                    type="date"
                    placeholder="MM/DD/YYYY"
                    aria-label="Check-out Date"
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  GUESTS
                  <Form.Control
                    type="Number"
                    placeholder="Number of Guests"
                    aria-label="Numner of Guests"
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
      <h2 className="m-4">Available Hotels</h2>
      {Allhotels.map((hotel, i) => (
        <Showhotel hotelDetail={hotel} key={i} />
      ))}
    </div>
  );
};

export default Hotelsearch;
