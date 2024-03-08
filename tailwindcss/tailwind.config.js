/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      red: '#ff0000',
      blue: '#DCF2F1',
      orange: '#DCFFB7',
      green: '#12372A',
      gray: '#E8C872',
      p: '#FFC7C7',
    },
    aspectRatio: {
      none: 'none',
      '16/9': '56.25%',
      '4/3': '75%',
      '1/1': '100%',
    },
    plugins: [],
  }
}
