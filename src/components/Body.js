import React from "react";
import Slidebar from "./Slidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex ">
    <Slidebar/>
      <Outlet />
    </div>
  );
};

export default Body;
