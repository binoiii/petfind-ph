module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#017ac3",
        },
        red: {
          450: "#ee4133",
        },
        green: {
          450: "#8dc53e",
        },
      },
      height: {
        sm: "24rem",
        md: "32rem",
      },
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Chango"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
}
