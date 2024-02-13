/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '415px',
      md: '768px',
      lg: '1020px',
    },
    colors: {
      'black': '#181A1B',
      'dark-blue': '#008CC0',
      'blue': '#01AEF0',
      'light-blue': '#F1F8FA',
      'yellow': '#D5D80E',
      'light-yellow': '#FDFFBB',
      'red': '#F15451',
      'light-red': '#FCE0DE',
      'gray': '#847E72',
      'white': '#FFFFFF',
    },
    fontSize: {
      sm: '0.9rem',
      base: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'rationale': ['Rationale', 'Arial', 'sans-serif'],
      'black-ops-one': ['Black Ops One', 'Arial', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero-bg.png')",
        'hero-bg2': "url('/hero-bg2.jpg')",
        'human--bg-intro': "url('/human/bg-intro.jpg')",
        'human--bg-bureau': "url('/human/bg-bureau.jpg')",
        'human--bg-appart': "url('/human/bg-appart.jpg')",
        'human--bg-bar': "url('/human/bg-bar.jpg')",
        'human--bg-passeur': "url('/human/bg-passeur.jpg')",
        'human--bg-entretien': "url('/human/bg-entretien.jpg')",
        'human--bg-hopital': "url('/human/bg-hopital.jpg')",
        'human--bg-fin': "url('/human/bg-fin.jpg')",
      }
    },
  },
  plugins: [],
}

