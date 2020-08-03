module.exports = {
  purge: [],
  theme: {
    extend: {},
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss')('./tailwindcss-config.js'),
  ],
}
