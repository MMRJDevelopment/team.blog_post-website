import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { createRequest } from "../utils";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handling input changes
  const handleInputsValues = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  // Sign-up function
  const handelSignUp = async () => {
    try {
      setLoading(true);
      setError("");

      // Validation example (You can improve this)
      if (!inputValue.name || !inputValue.email || !inputValue.password) {
        setError("All fields are required!");
        return;
      }

      const res = await createRequest.post(
        "https://team-blog-post-website.vercel.app/api/v1/users",
        inputValue
      );
      console.log("Sign-up successful", res.data);
      setInputValue({
        name: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (err) {
      console.error("Sign-up failed", err);
      setError("Sign-up failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              onChange={(e) => handleInputsValues(e)}
              name="name"
              value={inputValue.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              onChange={(e) => handleInputsValues(e)}
              name="email"
              value={inputValue.email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              onChange={(e) => handleInputsValues(e)}
              name="password"
              value={inputValue.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handelSignUp}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <button
              className=" text-black font-bold py-2 px-4 rounded "
              type="button"
              onClick={() => handleNavigation("/")}
            >
              Back
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
