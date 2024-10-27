import axios from "axios";

const MODE = import.meta.env.MODE;
export const baseURL =
  MODE === "DEV"
    ? "http://localhost:5000/api/v1"
    : "https:// vercel ar ta:/api/v1"; // put your base ul

export const createRequest = axios.create({
  baseURL,
  withCredentials: true,
});
