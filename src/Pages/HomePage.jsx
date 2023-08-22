import React from "react";
import { Outlet } from "react-router-dom";
import displayImg from "../Assets/Images/display.jpg";

import AppBar from "../Components/AppBar";


const HomePage = () => {
  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${displayImg})` }}
    >
      <div className="h-full backdrop-blur p-2">
        <div className="h-[10%]">
          <AppBar />
        </div>
        <div className="h-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
