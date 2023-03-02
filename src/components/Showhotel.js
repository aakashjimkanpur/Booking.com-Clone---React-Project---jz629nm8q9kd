import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../style/view.css";
import Button from "react-bootstrap/Button";
const Showhotel = (prop) => {
  console.log("details", prop.hotelDetail);
  return (
    <Container>
      <div className="view border border-dark">
        <div className="m-3 row">
          <div className="col">HOTEL:</div>
          <div className="col">CHECK-IN</div>
          <div className="col">PRICE:</div>
        </div>
        <div className="m-3 row fw-bold">
          <div className="col">{prop.hotelDetail.hotel_name}</div>
          <div className="col">{prop.hotelDetail.check_in}</div>
          <div className="col">{prop.hotelDetail.price_per_night}</div>
        </div>
        <div className="m-3 row">
          <div className="col">CITY:</div>
          <div className="col">CHECK-OUT</div>
          <div className="col">ROOM:</div>
        </div>
        <div className="m-3 row fw-bold">
          <div className="col">{prop.hotelDetail.city}</div>
          <div className="col">{prop.hotelDetail.check_out}</div>
          <div className="col">{prop.hotelDetail.room_type}</div>
        </div>
        <div className="m-3 row">
          <div className="col-8">RATING:</div>
          <div className="col-4">Guests:</div>
        </div>
        <div className="m-3 row fw-bold">
          <div className="col-8">{prop.hotelDetail.rating} / 10</div>
          <div className="col-4">{prop.hotelDetail.guests}</div>
        </div>
        <div className="m-3 d-flex justify-content-end">
          <Button variant="secondary">Book</Button>
        </div>
      </div>
    </Container>
  );
};

export default Showhotel;
