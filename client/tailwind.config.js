module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#0a0908",
        lightBlue: "#1982c4",
        matcha: "#6a994e",
        oceanBlue: "#4361ee",
        sideBar: "#202020",
        chatBg: "#3a86ff",
        lightGray: "#ced4da",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
