/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#98D3C5',
        'dark-teal': '#4FBAA0',
        'very-dark-teal': '#119A76',
        'btn-teal': '#119A76',
        cream: '#FAF1E3',
        beige: '#E8E0C3',
        'dark-beige': '#B8AC8A',
      },
    },
  },
  plugins: [],
};
