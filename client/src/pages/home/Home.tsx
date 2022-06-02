import React from "react";
import MainChat from "../../components/MainChat";
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="relative h-screen">
      <NavBar />
      <Sidebar />
      <MainChat />
    </div>
  );
};

export default Home;
