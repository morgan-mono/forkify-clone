/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#f9f5f3',
        'textdark': '#615551',
        'textmuted': '#918581',
        'textlight': '#d3c7c3;',
        'accent': '#f38e82'
      },
    },
  },
  plugins: [],
}
