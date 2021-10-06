

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    screens: {
      'xxs' : {'min': '300px', 'max': '474px'},
      'xs' : {'min': '475px', 'max': '639px'}
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
