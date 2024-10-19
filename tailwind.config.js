/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        custombold:'700'
     },
     fontFamily: {
      cutomfont:'SVN-Gilroy'
     },
     boxShadow: {
      'custom': '0px 6.87px 45.15px 0px rgba(0, 0, 0, 0.1)', 
      'custom1':'0 4px 28px -2px rgba(0, 0, 0, 0.08)',
      'custom2':' 0px 4px 28px -2px #00000014',
      'custom3':' 0px 4px 28px -2px #00000014',
      'custom4':' 0px 4px 28px -2px #00000014'


    },
    colors: {
      customDark: '#242B33',
      customGrayLight: '#D7D7D7',
      customGrayDark: '#D2D2D2',
    },
    rotate: {

    }
    },
  },
  plugins: [],
}