import React from "react";
import Container from "./layouts/Container";
import { FaInstagram } from "react-icons/fa";
import Flex from "./layouts/Flex";
import { IoLogoTwitter } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-[#252B3B] w-full ">
      <Container className="flex items-start justify-between pt-[43px] pb-[55px]">
        <div className="space-y-3 ">
          <img src="team..png" alt="" className="pb-4" />
          <Flex>
            <FaInstagram className="text-white text-lg" />
            <p className="text-white font-Mulish text-[14px] pl-2">instagram</p>
          </Flex>
          <Flex>
            <ImFacebook2 className="text-white text-lg" />
            <p className="text-white font-Mulish text-[14px] pl-2">Facebook</p>
          </Flex>
          <div className="flex items-center ">
            <ImTwitter className="text-white text-lg items-start" />
            <p className="text-white font-Mulish text-[14px] pl-2">Twitter</p>
          </div>
          <Flex>
            <FaInstagram className="text-white text-lg" />
            <p className="text-white font-Mulish text-[14px] pl-2">instagram</p>
          </Flex>
          <Flex>
            <ImFacebook2 className="text-white text-lg" />
            <p className="text-white font-Mulish text-[14px] pl-2">Facebook</p>
          </Flex>
          <div className="flex items-center ">
            <ImTwitter className="text-white text-lg items-start" />
            <p className="text-white font-Mulish text-[14px] pl-2">Twitter</p>
          </div>
        </div>
        <div>
          <h6 className="font-Mulish font-semibold text-[16px] text-white">
            Use Cases
          </h6>
          <ul className="font-Mulish font-normal text-white text-[14px] space-y-2 pt-[29px]">
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Prototyping</li>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Prototyping</li>
          </ul>
        </div>
        <div>
          <h6 className="font-Mulish font-semibold text-[16px] text-white">
            Explore
          </h6>
          <ul className="font-Mulish font-normal text-white text-[14px] space-y-2 pt-[29px]">
            <li>Figma</li>
            <li>Customers</li>
            <li>Why I Love Figma</li>
            <li>Figma</li>
            <li>Customers</li>
            <li>Why I Love Figma</li>
          </ul>
        </div>
        <div>
          <h6 className="font-Mulish font-semibold text-[16px] text-white">
            Resources
          </h6>
          <ul className="font-Mulish font-normal text-white text-[14px] space-y-2 pt-[29px]">
            <li>Community Resources Hub</li>
            <li>Support</li>
            <li>Education</li>
            <li>Community Resources Hub</li>
            <li>Support</li>
            <li>Education</li>
          </ul>
        </div>
        <div>
          <h5 className="font-Mulish font-semibold text-lg text-white">
            Subscribe to our newsletter
          </h5>
          <div>
            <input
              className="w-[297px] py-[14px] pl-4 text-lg font-Mulish font-semibold text-[#4DA0FD] outline-none mt-[17px]"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
