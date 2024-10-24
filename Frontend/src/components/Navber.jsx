import React from "react";
import Container from "./layouts/Container";
import { useNavigate } from "react-router";

const Navber = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleNavigate = () => {
    navigate("/postblog");
  };
  return (
    <Container className=" flex flex-row items-center justify-between">
      <div onClick={handleClick}>
        {window.location.pathname === "/" ? (
          <img src="team.logo.png" alt="" />
        ) : (
          <img src="teamblack.png" alt="" className="" />
        )}
      </div>
      <div className="flex flex-row items-center justify-center">
        <ul
          className={`flex flex-row font-Mulish font-bold text-base gap-[30px] ${
            window.location.pathname === "/" ? "text-white " : " text-black"
          }`}
        >
          <li onClick={() => handleNavigation("/blog")}>Blogs</li>
          <li>Services</li>
          <li>Contact</li>

          <li onClick={() => handleNavigation("/login")}>Log in</li>
        </ul>
        <button
          className={`py-4 px-[22px] border-2 border-white text-white font-Mulish font-bold text-base rounded-lg ml-[30px] mt-2 ${
            window.location.pathname === "/"
              ? "text-white "
              : " text-[#0c1b2c] bg-[#4DA0FD] border-[#5A4FF3] border-4"
          }`}
          onClick={handleNavigate}
        >
          Create Blog
        </button>
      </div>
    </Container>
  );
};

export default Navber;
