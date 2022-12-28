/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mountain": "url('./assets/images/sky.jpg')"
      }
    },
  },
  plugins: [],
}
