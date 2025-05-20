/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002855', // cybersécurité
        accent: '#00FFFF',  // IA
      },
    },
  },
  plugins: [],
};
