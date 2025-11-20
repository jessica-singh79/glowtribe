/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a3b0a3',
          400: '#7f8f7f',
          500: '#637263',
          600: '#4e5a4e',
          700: '#404840',
          800: '#363c36',
          900: '#2e322e',
        },
        cream: {
          50: '#fdfdfb',
          100: '#faf9f5',
          200: '#f5f2ea',
          300: '#ebe6d9',
          400: '#ddd4bf',
          500: '#cbbfa1',
          600: '#b5a384',
          700: '#9a886d',
          800: '#7f705b',
          900: '#685c4b',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e1d7c7',
          300: '#cdbda5',
          400: '#b9a186',
          500: '#a38668',
          600: '#8a6f56',
          700: '#725b47',
          800: '#5e4c3c',
          900: '#4e4033',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
