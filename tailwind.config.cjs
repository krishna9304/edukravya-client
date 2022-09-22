const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.blue,
      },
      boxShadow: {
        "inner-tr-10": "5px 0 0 0",
        "inner-tl-10": "-5px 0 0 0",
      },
    },
  },
  plugins: [],
};

// nonav: "calc(100vh-56px)",
// "big-nonav": "100vh", //76px
