import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCaretDownFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Showhotel from "./Showhotel";
import { toast } from "react-hot-toast";
const Hotelsearch = () => {
  // const location = useLocation();
  // console.log("Id: ", location.state.id);
  const [Allhotels, setAllHotel] = useState([]);
  const [Filterdhotels, setFilterdhotels] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guest, setGuest] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function fetchHotel() {
    setIsLoading(true);
    const Response = await fetch(
      "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
    );
    const HotelList = await Response.json();
    setIsLoading(false);
    setAllHotel(HotelList);
    console.log("Hotels are ", HotelList);
  }
  async function fetchFilterHotel() {
    setIsLoading(true);
    const Response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels?city=${city}&check_in=${checkIn}&check_out=${checkOut}&guests=${guest}&room_type=${roomType}`
    );
    const filteredHotelList = await Response.json();
    setIsLoading(false);
    setFilterdhotels(filteredHotelList);
    console.log("filtered Hotels are ", filteredHotelList);
  }
  useEffect(() => {
    fetchHotel();
  }, []);
  function filterHotel() {
    if (!city || !checkIn || !checkOut || !guest)
      toast.error("All Fields are required");
    else fetchFilterHotel();
  }
  return (
    <div>
      <Container>
        <div>
          <InputGroup>
            <div className="d-flex flex-column justify-content-around w-100">
              <div>
                Room Type:
                <select
                  onChange={(e) => {
                    setRoomType(e.target.value);
                  }}
                >
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="King">King</option>
                </select>
              </div>
              <div className="d-flex flex-xs-column justify-content-around">
                <div className="d-flex flex-column m-2 w-25">
                  CITY, OR LOCATION
                  <Form.Control
                    value={city}
                    onChange={(e) => {
                      let city = e.target.value;
                      city =
                        city.charAt(0).toUpperCase() +
                        city.slice(1).toLowerCase();
                      setCity(city);
                    }}
                    placeholder="City Name"
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  CHECK IN
                  <Form.Control
                    type="date"
                    value={checkIn}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                    }}
                    placeholder="MM/DD/YYYY"
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  CHECK OUT
                  <Form.Control
                    type="date"
                    value={checkOut}
                    onChange={(e) => {
                      setCheckOut(e.target.value);
                    }}
                    placeholder="MM/DD/YYYY"
                  />
                </div>
                <div className="d-flex flex-column m-2 w-25">
                  GUESTS
                  <Form.Control
                    value={guest}
                    onChange={(e) => {
                      setGuest(e.target.value);
                    }}
                    placeholder="Number of Guests"
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
            onClick={filterHotel}
          >
            Search
            <BsCaretDownFill />
          </Button>
          <hr className="d-flex justify-content-between w-50" />
        </div>
      </Container>
      <h2 className="m-4">Available Hotels</h2>
      {isLoading ? (
        <Container>
          <Spinner animation="border" variant="danger" />
        </Container>
      ) : Filterdhotels ? (
        Filterdhotels.map((hotel, i) => (
          <Showhotel hotelDetail={hotel} key={i} />
        ))
      ) : (
        Allhotels.map((hotel, i) => <Showhotel hotelDetail={hotel} key={i} />)
      )}
    </div>
  );
};

export default Hotelsearch;
