/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        aimLightGreen: `#dbf2e2`,
        aimMediumGreen: `#13c66b`,
        aimDeepGreen: `#007527`,
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

