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
      },
      flex: {
        '1.6': '1.6',
        '3': '3',
      },
    },
  },
  plugins: [],
}
