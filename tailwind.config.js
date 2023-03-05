/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#45AEEE',
        secondary: '#E8488A',
        accent: '#FFF232',
        neutral: '#1a1a1a',
        'base-100': '#ffffff',
        info: '#4AA8C0',
        success: '#823290',
        warning: '#EE8133',
        error: '#E93F33',
        'picton-blue': {
          50: '#f1f8fe',
          100: '#e2f0fc',
          200: '#bee1f9',
          300: '#84c9f5',
          400: '#45aeee',
          500: '#1a93dd',
          600: '#0d75bc',
          700: '#0b5d99',
          800: '#0e4f7e',
          900: '#114369',
        },
      },
    },
  },
  plugins: [],
};
