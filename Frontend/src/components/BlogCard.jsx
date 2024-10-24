import React, { useState } from "react";
import { useNavigate } from "react-router";
import ShowBlog from "../pages/ShowBlog";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogCard = ({ blog }) => {


  return (
    <div className="bg-white w-[370px] h-[440px] relative rounded-2xl">
      <div onClick={() => setShow(true)}>
        <Link to={`/blog/details/${blog._id}`}>
          <div>
            <img
              src={blog.image}
              alt="blog cover img"
              className="h-auto w-full rounded-t-2xl"
            />
          </div>

          <div className="px-[30px] pt-[21px]">
            <h5 className="font-Mulish font-medium text-[24px] w-full text-[#25313C] pb-[21px]">
              {blog.title}
            </h5>
            <p className="w-[318px] text-[14px] text-[#25313C] font-Mulish font-semibold pb-5">
              {blog.description}
            </p>
          </div>
        </Link>
      </div>

      <div className="absolute left-0 bottom-0">
        <div className="flex flex-row items-center pl-6 pb-6">
          <img src="" alt="" className="bg-black h-10 w-10 rounded-full" />
          <a className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-5">
            {blog.author}
          </a>
          <p className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-2">
            |
          </p>
          <p className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-3">
            {moment(blog.updatedAt).startOf("hour").fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
