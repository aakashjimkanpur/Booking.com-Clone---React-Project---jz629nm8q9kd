import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
// import Allhotels from "./Allhotels";
import Hotelsearch from "./Hotelsearch";
import Mynavbar from "./Mynavbar";

const App = () => {
  useEffect(() => {
    console.log("Use Effect");
  }, []);
  return (
    <div id="main">
      <>
        <Mynavbar />
        {/* <Hotelsearch /> */}
        {/* <Allhotels /> */}
        {/* <BrowserRouter>
          <Routes>
            <Route path="/stays" element={<Hotelsearch />} />
          </Routes>
        </BrowserRouter> */}
      </>
    </div>
  );
};

export default App;
