/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#3fd0d4",
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7)), url('../src/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
