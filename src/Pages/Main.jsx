import React from "react";
import Navbar from "../Component/Navbar";
import VideoIfram from "./VideoIfram";
import FetchApi from "../FetchApi/FetchApi";
import Sidebar from "../Component/Sidebar";

const Main = () => {
  return (
    <div>
      <FetchApi />
      <Navbar />
      <VideoIfram />
      <Sidebar />
    </div>
  );
};

export default Main;
