import React from "react";
import img from "/bannerimg.jpg";
import Container from "./layouts/Container";
import { useNavigate } from "react-router";
const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/postblog"); 
  };
  return (
    <div
      className="bg-cover h-screen mt-[-68px] relative z-[-10]  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <Container className="flex flex-col items-start justify-center h-screen">
        <h1 className="font-Work font-normal text-white text-[48px] w-[514px] lines leading-tight">
          Instant collaborations for remote teams
        </h1>
        <p className="font-Mulish font-bold text-white text-lg w-[324px]">
          All in one for your remote team chats, collaboration and track
          projects
        </p>
        <div className="mt-[70px] flex">
          <input
            type="email"
            className="bg-white border border-[#000000] text-[#6D7D8B] text-base block w-[320px] py-[10px] pl-4 rounded-md "
            placeholder="Email"
          />
          <button
            className="py-4 px-5 bg-[#0BBEF2] text-white font-Mulish text-base font-bold rounded-lg ml-[14px]"
            onClick={handleNavigate}
          >
            Get early access
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
