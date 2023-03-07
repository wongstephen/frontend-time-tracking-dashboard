/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "hsl(246, 80%, 60%)",
      "light-red-work": "hsl(15, 100%, 70%)",
      "soft-blue-play": "hsl(195, 74%, 62%)",
      "light-red-study": "hsl(348, 100%, 68%)",
      "lime-green-exercise": "hsl(145, 58%, 55%)",
      "violet-social": "hsl(264, 64%, 52%)",
      "soft-orange-self-care": "hsl(43, 84%, 65%)",
      "very-dark-blue": "hsl(226, 43%, 10%)",
      "dark-blue": "hsl(235, 46%, 20%)",
      "desaturated-blue": "hsl(235, 45%, 61%)",
      "pale-blue": "hsl(236, 100%, 87%)",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
