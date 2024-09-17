import React from "react";
import blogimg from "/bannerimg.jpg";
const BlogCard = () => {
  return (
    <div className=" bg-white w-[370px] h-[440px] relative rounded-2xl ">
      <div className=" ">
        <img
          src={blogimg}
          alt="blog cover img"
          className="h-[147px] w-full rounded-t-2xl "
        />
      </div>
      <div className="px-[30px] pt-[21px]"> 
        <h5 className="font-Mulish  font-medium text-[24px] w-full text-[#25313C]  pb-[21px]">
          10 secret tips for managing a team remotely
        </h5>
        <p className="w-[318px] text-[14px] text-[#25313C] font-Mulish font-semibold">
          There are times when our work impacts us deeply — sometimes in ways we
          neither acknowledge nor understand
        </p>
      </div>

      <div className=" absolute left-0  bottom-0">
        <div className="flex flex-row items-center  pl-6   pb-6">
          <img src="" alt="" className="bg-black h-10  w-10 rounded-full " />
          <a className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-5 ">
            Bessie Cooper
          </a>
          <p className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-2">
            |
          </p>{" "}
          <p className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-3">
            2nd January,2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
