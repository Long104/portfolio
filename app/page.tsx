"use client";
import React from "react";
import Nav from "../components/nav";
import Home from "../components/home";
import Info from "../components/info";

function page() {
  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="w-[90%]">
          <Nav />
          <Home />
          <Info />
        </div>
      </div>
    </>
  );
}

export default page;
