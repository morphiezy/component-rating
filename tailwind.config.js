const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./assets/javascript/*.js"
  ],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        dark: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "card-gradient":
          "radial-gradient(103.58% 100% at 50% 0%, #1D2530 28.08%, #19202A 60.94%)",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)",
            "-webkit-transform": "translateY(0)",
          },
          "50%": {
            transform: "translateY(6px)",
            "-webkit-transform": "translateY(6px)",
          },
          "100%": {
            transform: "translateY(0)",
            "-webkit-transform": "translateY(0)",
          },
        },
        "slide-z": {
          "0%": {
            "-webkit-transform": "perspective(100px) translateZ(-40px)",
            transform: "perspective(100px) translateZ(-40px)",
          },
          "100%": {
            "-webkit-transform": "perspective(100px) translateZ(0px)",
            transform: "perspective(100px) translateZ(0px)",
          },
        },
        "slide-y": {
          "0%": {
            "-webkit-transform": "translateY(100px)",
            transform: "translateY(100px)",
            opacity:0,
          },
          "100%": {
            "-webkit-transform": "translateY(0px)",
            transform: "translateY(0px)",
            opacity:1
          },
        },
      },
      animation: {
        'float': "float 3s infinite ease-in-out",
        "slide-z": "slide-z 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
        "slide-y": "slide-y 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)"
      },
    },
  },
  plugins: [],
};
