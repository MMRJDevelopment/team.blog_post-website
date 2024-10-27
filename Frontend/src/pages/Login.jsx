import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handling input changes
  const handleInputsValues = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  // Handle login and store data in localStorage
  const handelLogin = async () => {
    try {
      setError(null); // Clear any previous errors
      const response = await axios.post(
        "https://team-blog-post-website.vercel.app/api/v1/login",
        inputValue
      );

      // Assuming the response contains a token or user data
      const { token, user } = response.data;

      // Save login data to localStorage (only store the token or minimal user info)
      // console.log({ token });  // we have to get the token from server to store it
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful:", response.data);

      // Navigate to the home page
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <form>
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
              onClick={handelLogin}
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-indigo-500 hover:text-indigo-600"
            onClick={() => handleNavigation("/signup")}
          >
            Sign up
          </a>
        </p>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
