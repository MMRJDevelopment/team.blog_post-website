/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Mulish: ["Mulish", "sans-serif"],
      Work: ["Work Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        bannrimg: "url('/public/bannerimg.jpg')",
      },
    },
  },
  plugins: [],
};
