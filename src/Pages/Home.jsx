import React from "react";
import Navbar from "../Component/Navbar";
import VideoIfram from "./VideoIfram";
import FetchApi from "../FetchApi/FetchApi";
import Sidebar from "../Component/Sidebar";

const Home = () => {
  return (
    <div>
      <FetchApi />
      <Navbar />
      <VideoIfram />
      <Sidebar />
    </div>
  );
};

export default Home;
