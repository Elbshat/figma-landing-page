/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
      fontSize: {
        h1: ["55px", "65.5px"],
        h2: ["46px", "57px"],
        h3: ["22px", "33px"],
        h4: ["16px", "20px"],
        h5: ["12px", "18px"],
        p: ["18px", "27px"],
        btn: ["16px", "16px"],
        input: ["14px", "16px"],
        link: ["15px", "27px"],
      },
      colors: {
        primary: "#ef2779",
        secondary: "#7834be",
        accent: {
          DEFAULT: "#38A3F1",
          light: "#D6EBFF",
        },
        body: "#374754",
        dark: "#252b42",
        input: {
          bg: "#f5f5f5",
        },
      },
      backgroundImage: {
        hero: " url('../assets/img/hero-grad.svg')",
        test: "linear-gradient(to right top, #ef2779, #7834be)",
      },
      screens: {
        large: "1150px",
      },
      spacing: {
        "8xl": "1440px",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
