import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Hotelsearch from "./Hotelsearch";
import Mynavbar from "./Mynavbar";
import Flightsearch from "../components/Flightsearch";
import Login from "./Login";
import { Toaster } from "react-hot-toast";
import Newuser from "./Newuser";
import Checkout from "./Checkout";
import UserContext from "./userContext";

const App = () => {
  const [userName, setUserName] = useState("Login");
  return (
    <div id="main">
      <>
        <BrowserRouter>
          <UserContext.Provider
            value={{ name: { userName }, setname: { setUserName } }}
          >
            <Toaster />
            <Mynavbar />
            <Routes>
              <Route path="/" element={<Hotelsearch />} />
              <Route path="/stays" element={<Hotelsearch />} />
              <Route path="/flights" element={<Flightsearch />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newuser" element={<Newuser />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
