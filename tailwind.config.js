/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // important
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#0f172a",
        lightBg: "#ffffff",
        darkBg: "#0f172a",
      },
    },
  },
  plugins: [],
}