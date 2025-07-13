/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // ← Colore personalizzato per bg-primary
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.5)',
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.5)',
        lg: '3px 3px 6px rgba(0,0,0,0.5)',
        xl: '4px 4px 8px rgba(0,0,0,0.6)', // ← xl necessario per `theme('textShadow.xl')`
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
