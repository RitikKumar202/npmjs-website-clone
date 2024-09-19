/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)',
      },
    },
  },
  plugins: [],
}