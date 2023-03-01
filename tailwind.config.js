/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#0F1A2E",
          20: "#172F4C",
          30: "#194486",
        },
        secondary: {
          10: "#BE8F41",
          20: "#D3AE58",
          30: "#8E7923",
        },
      },
      backgroundImage: {
        header: "url('/images/header.png')",
        company: "url('/images/company.png')",
        mvv: "url('/images/mvv.png')",
        contact: "url('/images/contact.jpg')",
      },
    },
    plugins: [require("tw-elements/dist/plugin")]
  },
};
