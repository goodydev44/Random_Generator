/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "200px",
      xs: "450px",
      sm: "640px",
      md: "965px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
