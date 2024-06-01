const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },variants: {
    extend: {
        display: ["group-hover"],
    },
},
  darkMode: "class",
  plugins: [nextui()],
}

