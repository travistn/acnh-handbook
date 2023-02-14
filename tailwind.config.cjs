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
        'very-dark-beige': '#524e34',
        'fav-black': '#111111',
        'fav-blue': '#63b4f5',
        'fav-white': '#eeeeee',
        'fav-pink': '#f06292',
        'fav-red': '#ef5350',
        'fav-yellow': '#ffee58',
        'fav-brown': '#795548',
        'fav-green': '#8bc34a',
        'fav-colorful': '#ff00ff',
        'fav-orange': '#ffa726',
        'fav-purple': '#b163bf',
        'fav-aqua': '#81d4fa',
        'fav-gray': '#777777',
        'fav-beige': '#e1c699',
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text)-./,
    },
  ],
  plugins: [],
};
