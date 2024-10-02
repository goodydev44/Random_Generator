/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        mobile: "200px",
        xs: "450px",
        md: "930px",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};