/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "965px",
      lg: "1024px",
      elg: "1200px",
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
