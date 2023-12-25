const {nextui} = require("@nextui-org/theme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
 	  "./components/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
 ],
 theme: {
    fontFamily: {
      "display": "var(--display-font)",
      "body": "var(--body-font)",
    },
    extend: {},
 },
 darkMode: 'class',
 plugins: [require("@tailwindcss/typography"),nextui()],
}