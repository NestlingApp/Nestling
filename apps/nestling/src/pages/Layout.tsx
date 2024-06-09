import NavBar from "@Components/nav/Navbar";
import ChatWidget from "@Components/widgets/ChatWidget";
import React from "react";
import { Outlet } from "react-router-dom";
export const LayoutPage = () => {
  return (
    <div className="bg-[#F4F4F5]" style={{ backgroundColor: "#F4F4F5" }}>
      <NavBar />
      <Outlet />
      <ChatWidget />
    </div>
  );
};
