import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/layouts/Container";

const CreateBlog = () => {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState({
    title: "",
    descrition: "",
  });

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleInputsValues = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handlesubmit = async () => {
    const formData = new FormData();
    formData.append("title", inputValue.title);
    formData.append("description", inputValue.descrition);
    formData.append("tag", tags);
    formData.append("image", image);
    try {
      // Sending the form data to the backend
      const response = await axios.post(
        "http://localhost:9000/api/v1/blog",
        formData, // Use the FormData object for the request
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure multipart/form-data header is set
          },
        }
      );
      console.log(response.data); // Handle the response
      alert("Blog post created successfully!");
    } catch (error) {
      console.error("Error uploading blog post:", error);
    }
  };

  return (
    <Container>
      <div className="pt-[96px]">
        <h6 className="font-Mulish font-extrabold text-[48px] text-[#000000]">
          Posts blog
        </h6>
        <p className="font-Mulish  font-semibold text-lg text-[#6D7D8B] pt-5 pb-[69px]">
          Our latest updates and blogs about managing your posts
        </p>
      </div>

      <form>
        <div className=" space-y-6">
          <div>
            <label
              for="Blog Title"
              class="block mb-2 text-sm font-medium text-black"
            >
              Blog Title
            </label>
            <input
              type="text"
              class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="..."
              onChange={(e) => handleInputsValues(e)}
              value={inputValue.title}
              name="title"
              required
            />
          </div>

          <div>
            <label
              for="descrition"
              class="block mb-2 text-sm font-medium text-black"
            >
              Blog Descrition
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="..."
              onChange={(e) => handleInputsValues(e)}
              value={inputValue.descrition}
              name="descrition"
              required
            />
          </div>
          <div>
            <label for="tag" class="block mb-2 text-sm font-medium text black">
              Blog Tag
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setTags(e.target.value.split(","))}
            />
          </div>
        </div>
      </form>

      <div>
        <label
          class="block mb-2 text-sm font-medium text-black"
          for="file_input"
        >
          Upload file
        </label>
        <input
          class="block w-[200px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          name="file"
          value={inputValue.file}
          onChange={handleFileChange}
        />
        <button
          onClick={handlesubmit}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </Container>
  );
};

export default CreateBlog;
