import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import { useParams } from "react-router";
import axios from "axios";
import moment from "moment";

const ShowBlog = () => {
  const { id } = useParams(); // Destructuring params to get 'id'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blog, setBlog] = useState({});
  console.log(blog);
  useEffect(() => {
    if (!id) return; // Ensure there's an ID before making a request

    const getPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://team-blog-post-website.vercel.app/api/v1/blogs/${id}`
        );

        if (response.status === 200) {
          setBlog(response.data); // Set the blog data if request succeeds
          setError(null); // Reset any previous errors
        } else {
          throw new Error(response.data.message || "Failed to fetch blog");
        }
      } catch (err) {
        setError(err.message); // Catch any errors
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    getPost(); // Invoke the async function
  }, [id]); // Dependency on 'id'

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <div className="flex flex-col justify-center items-start ml-[230px] pt-[279px]">
        <h2 className="font-Mulish font-extrabold text-[48px] w-[700px] text-[#25313C]">
          {blog.title}
        </h2>
        <div className="flex flex-row items-center pt-[23px]">
          <img src="" alt="" className="bg-black h-10  w-10 rounded-full " />
          <a className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-5 ">
            Bessie Cooper
          </a>
          <p className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-2">
            {blog.descrition}
          </p>
          <p className="font-Mulish text-[12px] font-normal text-[#6D7D8B] pl-3">
            {moment(blog.updatedAt).startOf("hour").fromNow()}
          </p>
        </div>
      </div>
      <div className="w-[900px] h-auto pt-[61px]  mx-auto">
        <img src={blog.image || "/bannerimg.jpg"} alt="" />
      </div>
      <p className="font-Mulish font-semibold text-[#25313C] text-lg pt-[61px] w-[700px] ml-[230px] ">
        {blog.description}
      </p>
      <div className="pt-[56px] flex gap-[15px] ml-[230px] ">
        <img src="" alt="" className="bg-black w-10 h-10 rounded-full" />
        <div>
          <p className="font-Mulish font-semibold text-sm text-[#1E2742]">
            Written by
          </p>
          <a
            href=""
            className="font-Mulish text-[#25313C] font-normal text-[24px]"
          >
            Shedrack Eze
          </a>
          <p className="font-Mulish font-semibold text-sm text-[#989898]">
            CEO Team App
          </p>
        </div>
      </div>
      <div className=" border-b-[1px]  border-[#6D7D8B] mt-[83px] mb-[51px]" />
    </Container>
  );
};

export default ShowBlog;
