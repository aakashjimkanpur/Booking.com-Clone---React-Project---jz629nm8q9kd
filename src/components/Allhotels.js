import React, { useEffect, useState } from "react";
import Showhotel from "./Showhotel";

const Allhotels = () => {
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
      <h2 className="m-4">Available Hotels</h2>
      {Allhotels.map((hotel, i) => (
        <Showhotel hotelDetail={hotel} key={i} />
      ))}
    </div>
  );
};

export default Allhotels;
