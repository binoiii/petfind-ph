module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          350: "#3fcdfd",
          450: "#017ac3",
        },
        violet: {
          450: "#6549a0",
        },
        purple: {
          450: "#9549fb",
        },
        red: {
          350: "#f5d6dd",
          450: "#ee4133",
        },
        orange: {
          450: "#f68026",
        },
        yellow: {
          450: "#fbe260",
        },
        green: {
          450: "#32e495",
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
