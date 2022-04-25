module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: {'max': '640px', 'min': '320px'},
    },
    extend: {
      backgroundOpacity: {
         '10': '0.1',
         '20': '0.2',
         '90': '0.9',
         '95': '0.95',
      },
      width: {
        '80': '25rem',
      }
    }
  },
  plugins: [],
}
