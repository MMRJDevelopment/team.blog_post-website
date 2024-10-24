import React, { useRef, useState } from "react";
import axios from "axios";
import Container from "../components/layouts/Container";
import { toast } from "sonner";

const CreateBlog = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [tag, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("descrition", description);
    formData.append("tag", tag);
    const userData = localStorage.getItem("user");
    const isUser = userData ? JSON.parse(userData) : null;
    console.log(isUser.name);

    try {
      const { data } = await axios.post(
        "https://blog-team-backend.onrender.com/api/v1/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data) {
        toast.success(data.message);
      }

      // Clear form fields after successful submission
      setImage(null);
      fileRef.current.value = null;
      setTitle("");
      setDescription("");
      setTags([]);
    } catch (error) {
      const { data } = error.response;
      if (data) {
        toast.error(data.message);
      }
    }
  };

  return (
    <Container>
      <div className="pt-[96px]">
        <h6 className="font-Mulish font-extrabold text-[48px] text-[#000000]">
          Post a Blog
        </h6>
        <p className="font-Mulish font-semibold text-lg text-[#6D7D8B] pt-5 pb-10">
          Our latest updates and blogs about managing your posts
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6 border-2 border-gray-200 rounded-2xl py-10 pr-10 pl-5">
          <div>
            <label
              htmlFor="Blog Title"
              className="block mb-2 text-sm font-medium text-black"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full h-[50px] px-4 py-2 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 outline-none"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-black"
            >
              Blog Description
            </label>
            <textarea
              id="description"
              className="w-full h-40 p-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30"
              placeholder="Enter your blog description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="tag"
              className="block mb-2 text-sm font-medium text-black"
            >
              Blog Tag
            </label>
            <input
              placeholder="Enter your tags, separated by commas"
              type="text"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500/30 focus:border-blue-500/30 block w-full p-2.5"
              value={tag.join(",")}
              onChange={(e) => setTags(e.target.value.split(","))}
            />
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-2xl py-5 pl-5 my-5">
          <label
            className="block mb-2 text-sm font-bold text-black font-Mulish"
            htmlFor="file_input"
          >
            Upload Image
          </label>
          <input
            className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            type="file"
            ref={fileRef}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export default CreateBlog;
