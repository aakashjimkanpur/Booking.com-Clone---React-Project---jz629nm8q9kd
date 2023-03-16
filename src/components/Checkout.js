import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import "../styles/view.css";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const Price = location.state.Price;
  const SurCharges = (Price * 14) / 100;
  const Total = Price / 1 + SurCharges;
  function pay() {
    if (!name || !cardNumber || !expiryDate || !cvv)
      toast.error("All fields are required");
    else {
      if (cardNumber.length != 16 || cvv.length != 3) {
        if (cardNumber.length != 16)
          toast.error("Card Number must have 16 digits");
        if (cvv.length != 3) toast.error("CVV Number must have 3 digits");
      } else {
        toast.success(
          "Payment Successfull!! Booking Details Send to your Email within 2 hours"
        );
        navigate("/");
      }
    }
    // console.log("Payment");
  }
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  return (
    <div className="d-flex">
      <div className="view border border-dark">
        <Container>
          <div className="m-3 row">
            <h3>Fare Summary</h3>
            <br />
          </div>
          <div className="m-3 row">
            <div className="col">Base Fare</div>
            <div className="col">₹ {Price}</div>
          </div>
          <hr />
          <div className="m-3 row">
            <div className="col">Fee & SurCharges</div>
            <div className="col">₹ {SurCharges}</div>
          </div>
          <hr />
          <div className="m-3 row">
            <div className="col">Total Amount</div>
            <div className="col">₹ {Total}</div>
          </div>
          <hr />
          <br />
        </Container>
      </div>
      <div className="view border border-dark">
        <Container>
          <div className="m-1 row">
            <h3>Payment Method</h3>
          </div>
          <div className="m-1 row">
            <Form.Control
              value={name}
              placeholder="Name on Card"
              onChange={(e) => {
                let name = e.target.value;
                if (isNaN(name) || name === "") setName(name);
              }}
            />
          </div>
          <div className="m-1 row">
            <Form.Control
              value={cardNumber}
              placeholder="Debit Card Number"
              onChange={(e) => {
                let cardNumber = e.target.value;
                if (!isNaN(cardNumber) && cardNumber.length < 17) {
                  setCardNumber(cardNumber);
                }
              }}
            />
          </div>
          <div className="m-1 row">
            <Form.Control
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={expiryDate}
              placeholder="Expiry Date"
              onChange={(e) => {
                let expirydate = e.target.value;
                let diff =
                  new Date(e.target.value).getTime() - new Date().getTime();
                if (diff < 0)
                  toast.error("Expiry Date cant less than current Date");
                else setExpiryDate(expirydate);
              }}
            />
          </div>
          <div className="m-1 row">
            <Form.Control
              value={cvv}
              placeholder="CVV"
              onChange={(e) => {
                let cvv = e.target.value;
                if (!isNaN(cvv) && cvv.length < 4) {
                  setCvv(cvv);
                }
              }}
            />
          </div>
          <div className="m-2 row w-25">
            <Button onClick={pay} variant="secondary">
              Pay
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Checkout;
