module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: "24rem",
        md: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
