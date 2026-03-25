/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dc: {
          yellow: '#FDCE36',
          'yellow-light': '#FFF8E1',
          blue: '#0069B1',
          'blue-dark': '#004D80',
          'blue-light': '#E8F4FD',
          dark: '#414042',
          'grey-light': '#F5F5F5',
          'grey-mid': '#737373',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
