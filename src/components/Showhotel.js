import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/view.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Showhotel = (prop) => {
  const navigate = useNavigate();
  // console.log("details", prop.hotelDetail);
  function checkOut() {
    try {
      let user = window.localStorage.getItem("LoginUser");
      user = JSON.parse(user);
      if (!user || !user.isLogin) {
        toast.error("Please Login First");
        navigate("/login");
      } else {
        navigate("/checkout", {
          state: { Price: prop.hotelDetail.price_per_night },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
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
          <Button onClick={checkOut} variant="secondary">
            Book
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Showhotel;
