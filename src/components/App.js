import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Hotelsearch from "./Hotelsearch";
import Mynavbar from "./Mynavbar";
import Flightsearch from "../components/Flightsearch";
const App = () => {
  return (
    <div id="main">
      <>
        <BrowserRouter>
          <Mynavbar />
          <Routes>
            <Route path="/" element={<Hotelsearch />} />
            <Route path="/stays" element={<Hotelsearch />} />
            <Route path="/flights" element={<Flightsearch />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
