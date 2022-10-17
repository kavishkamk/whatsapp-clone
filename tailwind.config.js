/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'athens-gray': '#F8F9FB',
        'porcelain': '#F6F7F8',
        'gallery': '#EDEDED',
        'wild-sand': "#F6F6F6",
        'mine-shaft': "#303030",
        'pearl-bush': '#E5DDD6',
        'gossip': '#DAF8CB',
      },
      flex: {
        '1.6': '1.6',
        '3': '3',
      },
      maxWidth: {
        '1/2': '50%',
      }
    },
  },
  plugins: [],
}
