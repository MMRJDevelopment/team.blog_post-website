import axios from "axios";

const MODE = import.meta.env.VITE_MODE;
console.log(MODE);
export const baseURL =
  MODE === "DEV"
    ? "http://localhost:9000/api/v1"
    : "https://team-blog-post-server.vercel.app/api/v1"; // put your base ul

export const createRequest = axios.create({
  baseURL,
  withCredentials: true,
});
