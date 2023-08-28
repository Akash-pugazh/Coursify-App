import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../Components/AppBar";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-cover">
      <div className="h-full p-2 backdrop-blur">
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
