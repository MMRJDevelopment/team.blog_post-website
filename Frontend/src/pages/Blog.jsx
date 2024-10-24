import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/layouts/Container";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog-team-backend.onrender.com/api/v1/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="pt-[160px]">
      <div>
        <h6 className="font-Mulish font-extrabold text-[48px] text-[#000000]">
          Blog posts
        </h6>
        <p className="font-Mulish  font-semibold text-lg text-[#6D7D8B] pt-5 pb-[69px]">
          Our latest updates and blogs about managing your team
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-between">
        {blogs.map((item) => (
          <BlogCard key={item._id} blog={item} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
