/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow":"#F6C700",
        "black":"#1E1E1E"
      }
    },
  },
  plugins: [],
}