/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: '#1a1a2e',
        lightBlue: '#7dd3fc', /* Lighter sky blue */
        cardBg: '#2a2c35', /* Specific dark card background from your image */
        btnPurple: '#6d5aeb', /* Exact purple from Explore Insights button */
        btnTeal: '#3ab28f', /* Exact teal from Github button */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}