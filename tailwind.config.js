/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Rubik:['Rubik','sans-serif']
      },
      colors: {
        aimLightGreen: `#dbf2e2`,
        aimMediumGreen: `#13c56b`,
        aimDeepGreen: `#007427`,
        aimDeepRed:`#770600`,
      },
      backgroundImage: {
        'cover-pattern': 'url(src/assets/cover-pattern.png)',
        'gradient-with-cover': "linear-gradient(to right, white, #D9F1E1)",
      }
    },
  },
  plugins: [],
}
