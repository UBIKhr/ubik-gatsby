/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'regular': ['Montserrat', 'sans-serif'],
      'hind': ['Hind', 'sans-serif'],
      'cardo': ['Cardo', 'serif'],
    },
    fontSize: {
      'tiny': '0.875rem',
      'xs': '1rem',
      'sm': '1.125rem',
      'base1': '1.313rem',
      'base2': '1.5rem',
      'md': '2rem',
      'md2': '2.563rem',
      'lg': '4.125rem',
      'xl': '5.25rem'
    },
    colors: {
      'white': '#ffffff',
      'pink1': '#E75DA2',
      'pink2': '#F299FF',
      'orange1': '#D4617C',
      'orange2': '#F47B6A',
      'cyan': '#00F4F5',
      'blue': '#1D4CAB',
      'blue-dark': '#021C54',
      'background': '#000000',
      'gradient-start': '#002278',
      'gradient-end': '#00192C', 
    },  
    extend: {},
  },
  plugins: [],
}

