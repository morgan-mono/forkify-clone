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
        'mutedivory': '#f2efee',
        'textdark': '#615551',
        'textmuted': '#918581',
        'textlight': '#d3c7c3;',
        'accent': '#f38e82',
        'gradient1': '#fbdb89',
        'gradient2': '#f48982'
      },
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', // restored default timing function
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  plugins: [],
}
