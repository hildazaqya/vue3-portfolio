/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
      extend: {
        colors: {
          blacky: "#1B1A1A",
          bluesky : "#4FC0D0",
          greys : "#6e7075",
        },
        fontFamily: {
          Poppins: ['Poppins'],
        },
      },
  },
  plugins: [],
}

