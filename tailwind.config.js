module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
 	  "./components/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
    fontFamily: {
      "display": "var(--display-font)",
      "body": "var(--body-font)",
    },
    extend: {},
 },
 plugins: [require("@tailwindcss/typography")],
}