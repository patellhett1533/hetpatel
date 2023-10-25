/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["primary", "sans-serif"],
        primary2: ["primary-alt", "sans-serif"],
        secondary: ["secondary", "sans-serif"],
        display: ["display", "sans-serif"],
        display2: ["display-alt", "sans-serif"],
        extra: ["extra", "sans-serif"],
      },
      colors: {
        background: "var(--background-color)",
        container: "var(--container-color)",
        heading: "var(--heading-color)",
        title: "var(--title-color)",
        text: "var(--text-color)",
        button: "var(--button-color)",
        border: "var(--border-color)",
      },
      screens: {
        small: "380px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
