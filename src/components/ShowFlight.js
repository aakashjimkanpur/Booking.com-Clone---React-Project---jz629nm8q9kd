import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/view.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ShowFlight = (prop) => {
  const navigate = useNavigate();
  function checkOut() {
    try {
      let user = window.localStorage.getItem("LoginUser");
      user = JSON.parse(user);
      if (!user || !user.isLogin) {
        toast.error("Please Login First");
        navigate("/login");
      } else
        navigate("/checkout", {
          state: { Price: prop.flightDetail.price },
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <div className="view border border-dark">
        <div className="m-3 row">
          <div className="col">FROM:</div>
          <div className="col">DEPARTURE</div>
          <div className="col">PRICE:</div>
        </div>
        <div className="m-3 row fw-bold">
          <div className="col">{prop.flightDetail.from}</div>
          <div className="col">
            {prop.flightDetail.departure.departureTime} |{" "}
            {prop.flightDetail.departure.departureDate}
          </div>
          <div className="col">{prop.flightDetail.price}</div>
        </div>
        <div className="m-3 row">
          <div className="col">TO:</div>
          <div className="col">RETURN</div>
          <div className="col">Via:</div>
        </div>
        <div className="m-3 row fw-bold">
          <div className="col">{prop.flightDetail.to}</div>
          <div className="col">
            {prop.flightDetail.return.returnTime} |{" "}
            {prop.flightDetail.return.returnDate}
          </div>
          <div className="col">{prop.flightDetail.via}</div>
        </div>
        <div className="m-3 row">
          <div className="col-8">Airline:</div>
          <div className="col-4">Duration:</div>
        </div>
        <div className="m-3 row fw-bold">
          <div className="col-8">{prop.flightDetail.airlineName}</div>
          <div className="col-4">{prop.flightDetail.duration}</div>
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

export default ShowFlight;
