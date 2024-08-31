/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        tomato: "#ff6257",
        "dark-slate-grey": "#242742",
        "charcoal-grey": "#36384e",
        grey: "#9294a0",
        white: "#ffffff",
      },
      gap: {
        "card": "clamp(10vw, 1vw, 20vw)",
      },
    },
  },
  plugins: [],
};
