/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "rgb(15 23 42)",
      },
      minHeight: {
        nonav: "calc(100vh-7rem)",
        bignonav: "calc(100vh-64px)",
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
