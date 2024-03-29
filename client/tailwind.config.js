/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".main": {
          minHeight: "100vh",
          paddingTop: "6rem",
          paddingBottom: "5rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
        },
      });
    },
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px"
      },
      borderRadius: {
        default: "5px",
      },
      backgroundColor: {
        "white-main": "#ffffff",
      },
      colors: {
        "font-black-color": "#434343",
        "he-background": "#16141C",
        "low-text-black": "#797979",
        "purple-soft": "#AB9ADD",
        "white-main": "#ffffff",
        "he-cycle": "#7A7A8D",
      },
      fontFamily: {
        itim: ["Itim", "cursive"],
        inter: ["Inter", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"],
        playfair: ["Playfair"],
      },
      fontSize: {
        "2xl": "1.75rem",
      },
      spacing: {
        "default-width": "1.25rem",
        "default-heigh": "2.5rem",
      },
    },
  },
};
/* eslint-enable no-undef */
