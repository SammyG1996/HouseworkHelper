const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["LogoFont", "cursive"],
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
});